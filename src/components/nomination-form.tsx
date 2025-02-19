import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { submitToGoogleForms } from "@/lib/google-forms";
import type { NominationData } from "@/lib/google-forms";

interface NominationFormProps {
  onSuccess?: () => void;
  submitButtonText?: string;
  submitButtonClassName?: string;
  showCancelButton?: boolean;
  onCancel?: () => void;
}

export function NominationForm({ 
  onSuccess, 
  submitButtonText = "Submit Nomination",
  submitButtonClassName = "bg-blue-500 hover:bg-blue-600 text-white",
  showCancelButton = false,
  onCancel
}: NominationFormProps) {
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data: NominationData = {
        providerName: formData.get('providerName') as string,
        providerWebsite: formData.get('providerWebsite') as string,
        reason: formData.get('reason') as string,
        submitterEmail: session?.user?.email,
      };

      const success = await submitToGoogleForms('nomination', data);
      
      if (success) {
        toast.success("Thank you for your nomination! We'll review it shortly.");
        (e.target as HTMLFormElement).reset();
        onSuccess?.();
      } else {
        throw new Error("Failed to submit nomination");
      }
    } catch (error) {
      console.error('Error submitting nomination:', error);
      toast.error("Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div className={showCancelButton ? "flex justify-end gap-3 pt-4 border-t border-white/10" : ""}>
        {showCancelButton && (
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel}
            className="text-white hover:bg-white/10 hover:text-white"
          >
            Cancel
          </Button>
        )}
        <Button 
          type="submit"
          className={submitButtonClassName}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : submitButtonText}
        </Button>
      </div>
    </form>
  );
} 