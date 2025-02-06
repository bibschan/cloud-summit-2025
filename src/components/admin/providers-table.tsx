'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Image from 'next/image';
import { PlusIcon, Loader2Icon, TrashIcon, UploadIcon } from "lucide-react";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CloudProvider {
  id: string;
  name: string;
  displayName: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface ExistingLogo {
  name: string;
  path: string;
}

export function ProvidersTable() {
  const [providers, setProviders] = useState<CloudProvider[]>([]);
  const [existingLogos, setExistingLogos] = useState<ExistingLogo[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteProvider, setDeleteProvider] = useState<CloudProvider | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('existing');

  useEffect(() => {
    fetchProviders();
    fetchExistingLogos();
  }, []);

  const fetchProviders = async () => {
    try {
      const response = await fetch('/api/admin/providers');
      if (!response.ok) throw new Error('Failed to fetch cloud providers');
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      toast.error("Failed to fetch cloud providers");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchExistingLogos = async () => {
    try {
      const response = await fetch('/api/admin/logos');
      if (!response.ok) throw new Error('Failed to fetch logos');
      const data = await response.json();
      setExistingLogos(data.logos);
    } catch (error) {
      toast.error("Failed to fetch existing logos");
    }
  };

  const handleAddProvider = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    console.log('Active tab:', activeTab);
    console.log('Selected logo:', selectedLogo);
    
    try {
      if (activeTab === 'url') {
        // Using URL input
        const logoUrl = formData.get('logoUrl');
        console.log('URL input:', logoUrl);
        if (logoUrl) {
          formData.delete('image');
        }
      } else if (activeTab === 'existing' && selectedLogo) {
        // Using existing logo
        console.log('Using existing logo:', selectedLogo);
        formData.set('logoUrl', selectedLogo);
        formData.delete('image');
      } else if (activeTab === 'upload') {
        // Using file upload
        const image = formData.get('image');
        console.log('File upload:', image);
        formData.delete('logoUrl');
      } else {
        console.log('No logo selection method identified', { activeTab, selectedLogo });
        formData.set('logoUrl', '/cloud-providers/generic.svg');
        formData.delete('image');
      }
      
      // Log the final form data
      console.log('Form data entries:', Array.from(formData.entries()));
      
      const response = await fetch('/api/admin/providers', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to add cloud provider');
      }

      const newProvider = await response.json();
      console.log('New provider created:', newProvider);
      
      setProviders([newProvider, ...providers]);
      setIsAddDialogOpen(false);
      toast.success("Cloud provider added successfully");
      
      // Reset form and states
      (e.target as HTMLFormElement).reset();
      setSelectedLogo('');
      setActiveTab('existing');
    } catch (error) {
      console.error('Error adding provider:', error);
      toast.error(error instanceof Error ? error.message : "Failed to add cloud provider");
    }
  };

  const handleDeleteProvider = async (provider: CloudProvider) => {
    setIsDeleting(true);
    
    // Store the current state for rollback if needed
    const previousProviders = [...providers];
    
    try {
      // Optimistically update the UI
      setProviders(providers.filter(p => p.id !== provider.id));
      setDeleteProvider(null);
      
      // Make the API call
      const response = await fetch(`/api/admin/providers/${provider.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete cloud provider');
      }

      toast.success("Cloud provider deleted successfully");
    } catch (error) {
      // Rollback on error
      setProviders(previousProviders);
      toast.error("Failed to delete cloud provider");
      console.error('Error deleting provider:', error);
    } finally {
      setIsDeleting(false);
      setDeleteProvider(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-2">
          <Loader2Icon className="h-8 w-8 animate-spin text-white" />
          <p className="text-sm text-white/80">Loading cloud providers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">Cloud Providers</h2>
          <p className="text-sm text-white/60 mt-1">
            Manage the cloud providers that users can vote for.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white/10 hover:bg-white/20 text-white border-0">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Provider
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] p-0 gap-0 bg-gray-900 border-white/10 max-h-[85vh] overflow-y-auto">
            <DialogHeader className="px-6 pt-6 pb-4 border-b border-white/10 sticky top-0 bg-gray-900 z-10">
              <DialogTitle className="text-xl font-semibold text-white">Add New Cloud Provider</DialogTitle>
              <DialogDescription className="text-white/60 text-base">
                Add a new cloud provider to the voting system.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddProvider} className="px-6 py-4">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-white">Provider ID</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                    pattern="[a-z0-9][a-z0-9-]*[a-z0-9]"
                    title="Lowercase letters, numbers, and hyphens only. Must start and end with a letter or number."
                    placeholder="e.g., aws"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="displayName" className="text-sm font-medium text-white">Display Name</Label>
                  <Input 
                    id="displayName" 
                    name="displayName" 
                    required 
                    placeholder="e.g., Amazon Web Services"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-white">Logo</Label>
                  <Tabs 
                    defaultValue="existing" 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="bg-white/5 text-white">
                      <TabsTrigger value="existing" className="data-[state=active]:bg-white/10">
                        Choose Existing
                      </TabsTrigger>
                      <TabsTrigger value="url" className="data-[state=active]:bg-white/10">
                        URL
                      </TabsTrigger>
                      <TabsTrigger value="upload" className="data-[state=active]:bg-white/10">
                        Upload New
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="existing" className="mt-0 border-0 p-0">
                      <RadioGroup
                        value={selectedLogo}
                        onValueChange={setSelectedLogo}
                        className="grid grid-cols-3 gap-4 p-4 max-h-[300px] overflow-y-auto"
                      >
                        {existingLogos.map((logo) => (
                          <div key={logo.path} className="relative">
                            <RadioGroupItem
                              value={logo.path}
                              id={logo.path}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={logo.path}
                              className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.075] peer-data-[state=checked]:border-sky-500 peer-data-[state=checked]:bg-sky-500/10 cursor-pointer"
                            >
                              <div className="relative h-12 w-12">
                                <Image
                                  src={logo.path}
                                  alt={logo.name}
                                  fill
                                  sizes="48px"
                                  className="object-contain"
                                  unoptimized
                                  onError={(e) => {
                                    console.error(`Failed to load logo image: ${logo.path}`);
                                    const img = e.target as HTMLImageElement;
                                    img.src = '/cloud-providers/generic.svg';
                                  }}
                                />
                              </div>
                              <span className="text-sm text-white/80">{logo.name}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="url" className="mt-4">
                      <div className="space-y-2">
                        <Input
                          id="logoUrl"
                          name="logoUrl"
                          type="url"
                          placeholder="https://example.com/logo.svg"
                          className="bg-white/5 border-white/10 text-white"
                          onChange={(e) => setSelectedLogo(e.target.value)}
                        />
                        <p className="text-[0.8rem] text-white/60">
                          Enter a direct URL to an image (SVG or PNG recommended)
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="upload" className="mt-4">
                      <Input
                        id="image"
                        name="image"
                        type="file"
                        accept=".png,.svg"
                        className="cursor-pointer bg-white/5 border-white/10 text-white file:bg-white/10 file:text-white file:border-0"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setSelectedLogo('');
                          }
                        }}
                      />
                      <p className="text-[0.8rem] text-white/60 mt-2">
                        Upload a PNG or SVG file (recommended size: 200x200 pixels)
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-white/10 sticky bottom-0 bg-gray-900">
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => {
                    setIsAddDialogOpen(false);
                    setSelectedLogo('');
                  }}
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  Add Provider
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-xl overflow-hidden border border-white/[0.08]">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-white/[0.08]">
              <TableHead className="w-[100px] text-white/40 font-medium h-11">Logo</TableHead>
              <TableHead className="text-white/40 font-medium">id</TableHead>
              <TableHead className="text-white/40 font-medium">Display Name</TableHead>
              <TableHead className="text-white/40 font-medium">Added</TableHead>
              <TableHead className="w-[100px] text-white/40 font-medium text-right pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {providers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-32 text-center border-white/[0.08]">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-white/60 text-base">No cloud providers found</p>
                    <p className="text-white/40 mt-1">Add your first cloud provider to get started</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              providers.map((provider) => (
                <TableRow 
                  key={provider.id} 
                  className="group border-white/[0.08] hover:bg-white/[0.02] transition-colors"
                >
                  <TableCell className="py-4">
                    <div className="relative h-12 w-12 rounded-lg bg-white/[0.03] p-2.5 ring-1 ring-white/[0.08]">
                      <Image
                        src={provider.logoUrl}
                        alt={`${provider.displayName} logo`}
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                        unoptimized
                        priority
                        onError={(e) => {
                          console.error(`Failed to load provider image: ${provider.logoUrl}`);
                          const img = e.target as HTMLImageElement;
                          img.src = '/cloud-providers/generic.svg';
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="align-middle">
                    <span className="font-medium text-white">{provider.name}</span>
                  </TableCell>
                  <TableCell className="align-middle">
                    <span className="text-white/80">{provider.displayName}</span>
                  </TableCell>
                  <TableCell className="align-middle">
                    <span className="text-white/60">{new Date(provider.createdAt).toLocaleDateString()}</span>
                  </TableCell>
                  <TableCell className="text-right pr-4">
                    <AlertDialog.Root 
                      open={deleteProvider?.id === provider.id} 
                      onOpenChange={(open: boolean) => !open && setDeleteProvider(null)}
                    >
                      <AlertDialog.Trigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white/60 hover:bg-red-500/10 hover:text-red-400"
                          onClick={() => setDeleteProvider(provider)}
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </AlertDialog.Trigger>
                      <AlertDialog.Portal>
                        <AlertDialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                        <AlertDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-900 border border-white/10 p-6 shadow-2xl">
                          <AlertDialog.Title className="text-xl font-semibold text-white">
                            Delete Cloud Provider
                          </AlertDialog.Title>
                          <AlertDialog.Description className="mt-2.5 text-base text-white/70">
                            Are you sure you want to delete {provider.displayName}? This action cannot be undone.
                          </AlertDialog.Description>
                          <div className="mt-8 flex justify-end gap-3">
                            <AlertDialog.Cancel asChild>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-white hover:bg-white/10 hover:text-white"
                              >
                                Cancel
                              </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action asChild>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => handleDeleteProvider(provider)}
                                disabled={isDeleting}
                                className="bg-red-500 hover:bg-red-600 text-white px-4"
                              >
                                {isDeleting && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
                                Delete
                              </Button>
                            </AlertDialog.Action>
                          </div>
                        </AlertDialog.Content>
                      </AlertDialog.Portal>
                    </AlertDialog.Root>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 