/**
 * Base interface for form data
 */
export interface BaseFormData {
  submitterEmail?: string | null;
}

/**
 * Interface for cloud provider nomination data
 */
export interface NominationData extends BaseFormData {
  providerName: string;
  providerWebsite: string;
  reason: string;
}

/**
 * Interface for speaker submission data
 */
export interface SpeakerData extends BaseFormData {
  name: string;
  linkedinProfile: string;
  bio: string;
  talkTitle: string;
  talkLength: string;
  skillLevel: string;
  targetAudience: string;
  abstract: string;
  experience: string;
  comments?: string;
}

/**
 * Interface for volunteer application data
 */
export interface VolunteerData extends BaseFormData {
  name: string;
  availability: string;
  experience: string;
}

/**
 * Interface for sponsor inquiry data
 */
export interface SponsorData extends BaseFormData {
  companyName: string;
  contactName: string;
  sponsorshipLevel: string;
  message: string;
}

/**
 * Form types supported by the application
 */
export type FormType = 'nomination' | 'speaker' | 'volunteer' | 'sponsor';

/**
 * Configuration for each form type
 */
const FORM_CONFIGS = {
  nomination: {
    url: process.env.NEXT_PUBLIC_NOMINATION_FORM_URL,
    fields: {
      providerName: process.env.NEXT_PUBLIC_NOMINATION_FORM_PROVIDER_NAME_ID,
      providerWebsite: process.env.NEXT_PUBLIC_NOMINATION_FORM_WEBSITE_ID,
      reason: process.env.NEXT_PUBLIC_NOMINATION_FORM_REASON_ID,
    }
  },
  speaker: {
    url: process.env.NEXT_PUBLIC_SPEAKER_FORM_URL,
    fields: {
      name: process.env.NEXT_PUBLIC_SPEAKER_FORM_NAME_ID,
      linkedinProfile: process.env.NEXT_PUBLIC_SPEAKER_FORM_LINKEDIN_ID,
      bio: process.env.NEXT_PUBLIC_SPEAKER_FORM_BIO_ID,
      talkTitle: process.env.NEXT_PUBLIC_SPEAKER_FORM_TALK_TITLE_ID,
      talkLength: process.env.NEXT_PUBLIC_SPEAKER_FORM_TALK_LENGTH_ID,
      skillLevel: process.env.NEXT_PUBLIC_SPEAKER_FORM_SKILL_LEVEL_ID,
      targetAudience: process.env.NEXT_PUBLIC_SPEAKER_FORM_TARGET_AUDIENCE_ID,
      abstract: process.env.NEXT_PUBLIC_SPEAKER_FORM_ABSTRACT_ID,
      experience: process.env.NEXT_PUBLIC_SPEAKER_FORM_EXPERIENCE_ID,
      comments: process.env.NEXT_PUBLIC_SPEAKER_FORM_COMMENTS_ID,
      submitterEmail: process.env.NEXT_PUBLIC_SPEAKER_FORM_EMAIL_ID,
    }
  },
  volunteer: {
    url: process.env.NEXT_PUBLIC_VOLUNTEER_FORM_URL,
    fields: {
      name: process.env.NEXT_PUBLIC_VOLUNTEER_FORM_NAME_ID,
      availability: process.env.NEXT_PUBLIC_VOLUNTEER_FORM_AVAILABILITY_ID,
      experience: process.env.NEXT_PUBLIC_VOLUNTEER_FORM_EXPERIENCE_ID,
      submitterEmail: process.env.NEXT_PUBLIC_VOLUNTEER_FORM_EMAIL_ID,
    }
  },
  sponsor: {
    url: process.env.NEXT_PUBLIC_SPONSOR_FORM_URL,
    fields: {
      companyName: process.env.NEXT_PUBLIC_SPONSOR_FORM_COMPANY_ID,
      contactName: process.env.NEXT_PUBLIC_SPONSOR_FORM_CONTACT_ID,
      sponsorshipLevel: process.env.NEXT_PUBLIC_SPONSOR_FORM_LEVEL_ID,
      message: process.env.NEXT_PUBLIC_SPONSOR_FORM_MESSAGE_ID,
      submitterEmail: process.env.NEXT_PUBLIC_SPONSOR_FORM_EMAIL_ID,
    }
  }
} as const;

/**
 * Submits data to a Google Form
 * 
 * To set up:
 * 1. Create your Google Forms
 * 2. Get the form URLs: Click "Send" and copy the form URLs
 * 3. Get field IDs for each form:
 *    - Open form in browser
 *    - Right-click > View Page Source
 *    - Search for "entry." to find field IDs
 *    - Each field will have an ID like "entry.123456789"
 * 4. Add these to your .env.local (example for nomination form):
 *    NEXT_PUBLIC_NOMINATION_FORM_URL=https://docs.google.com/forms/d/e/YOUR-FORM-ID/formResponse
 *    NEXT_PUBLIC_NOMINATION_FORM_PROVIDER_NAME_ID=entry.123456789
 *    NEXT_PUBLIC_NOMINATION_FORM_WEBSITE_ID=entry.987654321
 *    NEXT_PUBLIC_NOMINATION_FORM_REASON_ID=entry.456789123
 *    NEXT_PUBLIC_NOMINATION_FORM_EMAIL_ID=entry.321654987
 * 
 * @param formType The type of form to submit to
 * @param data The data to submit
 * @returns Promise<boolean> indicating success/failure
 */
export async function submitToGoogleForms<T extends BaseFormData>(
  formType: FormType,
  data: T
): Promise<boolean> {
  const config = FORM_CONFIGS[formType];
  
  // Validate configuration
  if (!config?.url || !config?.fields) {
    console.error(`Google Forms configuration for ${formType} is missing. Please check your environment variables.`);
    return false;
  }

  try {
    const formData = new URLSearchParams();
    
    // Add all fields from the data object that have corresponding field IDs
    Object.entries(data).forEach(([key, value]) => {
      const fieldId = config.fields[key as keyof typeof config.fields];
      if (fieldId && value) {
        formData.append(fieldId, value.toString());
      }
    });

    // Submit to Google Forms
    // Note: Using no-cors mode because Google Forms doesn't support CORS
    // This means we won't get a meaningful response, but the submission will work
    await fetch(config.url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    return true;
  } catch (error) {
    console.error(`Error submitting to ${formType} Google Form:`, error);
    return false;
  }
} 