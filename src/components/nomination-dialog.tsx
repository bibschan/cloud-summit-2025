import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";

interface NominationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NominationDialog({ open, onOpenChange }: NominationDialogProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const useExternalNominationForm = process.env.NEXT_PUBLIC_USE_EXTERNAL_NOMINATION_FORM === "true";
  const externalNominationFormUrl = process.env.NEXT_PUBLIC_EXTERNAL_NOMINATION_FORM_URL as string;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (useExternalNominationForm) {
      window.open(externalNominationFormUrl, '_blank');
      onOpenChange(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        providerName: formData.get('providerName'),
        providerWebsite: formData.get('providerWebsite'),
        reason: formData.get('reason'),
        submitterEmail: session?.user?.email,
      };

      // TODO: Add Google Forms submission logic here
      console.log('Form data:', data);

      toast.success("Thank you for your nomination! We'll review it shortly.");
      onOpenChange(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting nomination:', error);
      toast.error("Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 gap-0 bg-gray-900 border-white/10">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-white/10">
          <DialogTitle className="text-xl font-semibold text-white">
            Nominate a Cloud Provider
          </DialogTitle>
          <DialogDescription className="text-white/60 text-base">
            Know a great cloud provider that should be on our list? Let us know!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-6">
          {useExternalNominationForm ? (
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => onOpenChange(false)}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Continue to Form
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="providerName" className="text-white">
                  Provider Name
                </Label>
                <Input
                  id="providerName"
                  name="providerName"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="e.g., Cloudflare"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="providerWebsite" className="text-white">
                  Provider Website
                </Label>
                <Input
                  id="providerWebsite"
                  name="providerWebsite"
                  type="url"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="e.g., https://cloudflare.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason" className="text-white">
                  Why should this provider be included?
                </Label>
                <Textarea
                  id="reason"
                  name="reason"
                  required
                  className="bg-white/5 border-white/10 text-white min-h-[100px]"
                  placeholder="Tell us why this provider would be a valuable addition..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => onOpenChange(false)}
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Nomination"}
                </Button>
              </div>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
