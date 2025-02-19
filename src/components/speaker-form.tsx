import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { submitToGoogleForms } from "@/lib/google-forms";
import type { SpeakerData } from "@/lib/google-forms";

interface SpeakerFormProps {
  onSuccess?: () => void;
  submitButtonText?: string;
  submitButtonClassName?: string;
}

export function SpeakerForm({ 
  onSuccess, 
  submitButtonText = "Submit Proposal",
  submitButtonClassName = "bg-blue-500 hover:bg-blue-600 text-white",
}: SpeakerFormProps) {
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillLevel, setSkillLevel] = useState("L200");
  const [targetAudience, setTargetAudience] = useState<string[]>([]);

  const handleTargetAudienceChange = (value: string) => {
    setTargetAudience(prev => {
      if (prev.includes(value)) {
        return prev.filter(v => v !== value);
      }
      return [...prev, value];
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data: SpeakerData = {
        name: formData.get('name') as string,
        submitterEmail: session?.user?.email,
        linkedinProfile: formData.get('linkedinProfile') as string,
        bio: formData.get('bio') as string,
        talkTitle: formData.get('talkTitle') as string,
        talkLength: formData.get('talkLength') as string,
        skillLevel: skillLevel,
        targetAudience: targetAudience.join(', '),
        abstract: formData.get('abstract') as string,
        experience: formData.get('experience') as string,
        comments: formData.get('comments') as string,
      };

      const success = await submitToGoogleForms('speaker', data);
      
      if (success) {
        toast.success("Thank you for your submission! We'll review it and get back to you by the end of February 2025.");
        (e.target as HTMLFormElement).reset();
        setSkillLevel('L200');
        setTargetAudience([]);
        onSuccess?.();
      } else {
        throw new Error("Failed to submit speaker proposal");
      }
    } catch (error) {
      console.error('Error submitting speaker proposal:', error);
      toast.error("Failed to submit proposal. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Your Name *
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
        <Label htmlFor="linkedinProfile" className="text-white">
          LinkedIn Profile *
        </Label>
        <Input
          id="linkedinProfile"
          name="linkedinProfile"
          type="url"
          required
          className="bg-white/5 border-white/10 text-white"
          placeholder="https://linkedin.com/in/your-profile"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" className="text-white">
          Biography About You *
        </Label>
        <Textarea
          id="bio"
          name="bio"
          required
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
          placeholder="Tell us about your experience and expertise..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="talkTitle" className="text-white">
          Presentation Title *
        </Label>
        <Input
          id="talkTitle"
          name="talkTitle"
          required
          className="bg-white/5 border-white/10 text-white"
          placeholder="Enter your proposed talk title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="talkLength" className="text-white">
          Length of Talk *
        </Label>
        <Input
          id="talkLength"
          name="talkLength"
          required
          value="25 minutes"
          disabled
          className="bg-white/5 border-white/10 text-white"
        />
        <p className="text-sm text-white/60">All talks are 25 minutes with a 5-minute intermission between talks</p>
      </div>

      <div className="space-y-2">
        <Label className="text-white">
          Audience Target Skill Level *
        </Label>
        <RadioGroup
          value={skillLevel}
          onValueChange={setSkillLevel}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="L100" id="L100" />
            <Label htmlFor="L100" className="text-white">L100 (Beginner)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="L200" id="L200" />
            <Label htmlFor="L200" className="text-white">L200 (Intermediate)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="L300" id="L300" />
            <Label htmlFor="L300" className="text-white">L300 (Advanced)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-white">
          Target Audience *
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {['Developers', 'DevOps', 'Operations', 'Architects', 'Leaders/Management', 'Other'].map((audience) => (
            <div key={audience} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={audience}
                checked={targetAudience.includes(audience)}
                onChange={() => handleTargetAudienceChange(audience)}
                className="rounded border-white/10 bg-white/5"
              />
              <Label htmlFor={audience} className="text-white">{audience}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="abstract" className="text-white">
          Presentation Abstract *
        </Label>
        <Textarea
          id="abstract"
          name="abstract"
          required
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
          placeholder="Describe what your talk will cover and what attendees will learn..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience" className="text-white">
          Previous Speaking Experience *
        </Label>
        <Textarea
          id="experience"
          name="experience"
          required
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
          placeholder="Tell us about your previous speaking experience..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments" className="text-white">
          Any feedback, questions or additional comments
        </Label>
        <Textarea
          id="comments"
          name="comments"
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
          placeholder="Any additional information you'd like to share..."
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