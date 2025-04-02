"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Nominate() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const useExternalNominationForm =
        process.env.NEXT_PUBLIC_USE_EXTERNAL_NOMINATION_FORM === "true";
    const externalNominationFormUrl = process.env
        .NEXT_PUBLIC_EXTERNAL_NOMINATION_FORM_URL as string;

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin");
            return;
        }

        if (useExternalNominationForm) {
            window.location.href = externalNominationFormUrl;
        }
    }, [status, router, useExternalNominationForm, externalNominationFormUrl]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const providerName = formData.get("providerName");
            const providerWebsite = formData.get("providerWebsite");
            const reason = formData.get("reason");

            const googleFormsUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdXLc2ueBF5azLrM05Cz9eNnG6duMVL8RH14EGOjAzDdmM8uQ/formResponse?&submit=Submit?usp=pp_url&entry.1692382468=${encodeURIComponent(
                providerName as string
            )}&entry.1758108843=${encodeURIComponent(
                providerWebsite as string
            )}&entry.1319184364=${encodeURIComponent(reason as string)}`;

            const response = await fetch(googleFormsUrl, {
                method: "GET",
                mode: "no-cors",
            });

            toast.success("Thank you for your nomination! We'll review it shortly.");

        } catch (error) {
            console.error("Error submitting nomination:", error);
            toast.error("Failed to submit nomination. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === "loading") {
        return (
            <main className="min-h-screen">
                <div className="container mx-auto px-6 py-24">
                    <div className="flex items-center justify-center">
                        <p className="text-white/60">Loading...</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <section className='my-0' >
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-8 max-w-xl mx-auto">
                    <div className="flex flex-col gap-1.5 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Nominate a Local Canadian Tech Company
                        </h1>
                        <p className="text-lg text-white/60">
                            Know a great local company that deserves recognition? Let us know!
                        </p>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="providerName" className="text-white">
                                    Company Name
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
                                    Company Website
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
                                    Why should this company be included?
                                </Label>
                                <Textarea
                                    id="reason"
                                    name="reason"
                                    required
                                    className="bg-white/5 border-white/10 text-white min-h-[100px]"
                                    placeholder="Tell us why this provider would be a valuable addition..."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Nomination"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
