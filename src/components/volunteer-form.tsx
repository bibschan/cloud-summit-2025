import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { submitToGoogleForms } from "@/lib/google-forms";
import type { VolunteerData } from "@/lib/google-forms";

interface VolunteerFormProps {
  onSuccess?: () => void;
  submitButtonText?: string;
  submitButtonClassName?: string;
}

export function VolunteerForm({ 
  onSuccess, 
  submitButtonText = "Submit Application",
  submitButtonClassName = "bg-blue-500 hover:bg-blue-600 text-white",
}: VolunteerFormProps) {
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data: VolunteerData = {
        name: formData.get('name') as string,
        availability: formData.get('availability') as string,
        experience: formData.get('experience') as string,
        submitterEmail: session?.user?.email,
      };

      const success = await submitToGoogleForms('volunteer', data);
      
      if (success) {
        toast.success("Thank you for volunteering! We'll be in touch soon.");
        (e.target as HTMLFormElement).reset();
        onSuccess?.();
      } else {
        throw new Error("Failed to submit volunteer application");
      }
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Your Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          className="bg-white/5 border-white/10 text-white"
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability" className="text-white">
          Availability
        </Label>
        <Textarea
          id="availability"
          name="availability"
          required
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
          placeholder="Please let us know your availability during the event (May 27, 2025)..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience" className="text-white">
          Relevant Experience
        </Label>
        <Textarea
          id="experience"
          name="experience"
          required
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
          placeholder="Tell us about any relevant experience you have (event organization, technical background, etc.)..."
        />
      </div>

      <Button 
        type="submit"
        className={submitButtonClassName}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : submitButtonText}
      </Button>
    </form>
  );
} 