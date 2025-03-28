'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { MessageCircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();
    const [questionType, setQuestionType] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [errorText, setErrorText] = useState("");
    const accessKey = process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!name || !email || !message) {
            setErrorMessage(true);
            return;
        }

        const formData = new FormData();
        formData.append("access_key", accessKey || "");
        formData.append("questionType", questionType);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("to", "info@cloudsummit.ca");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData, // Use FormData instead of JSON
                referrerPolicy: "no-referrer",
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log("Form submitted successfully!", result);
                router.push("/thank-you");
            } else {
                setErrorMessage(true);
                setErrorText(result.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            setErrorMessage(true);
            setErrorText("An error occurred while submitting the form.");
            console.error("Form submission error:", error);
        }
    }


    return (
        <div className="min-h-screen text-white ">
            <Nav />
            <main className="w-full bg-primary-900 py-10 md:py-20" id="team">
                <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-24">
                    <section className="flex flex-col items-center justify-center space-y-8 text-center my-8 ">
                        <div className="space-y-2">
                            <h2 className="text-6xl md:text-8xl  text-white">
                                Got a Question?&nbsp;
                                <span className="block md:inline-block text-lilac">
                                    Contact Us
                                </span>
                            </h2>

                        </div>

                        <form onSubmit={handleSubmit} className="text-start min-w-[300px] w-1/2">
                            <div className="flex flex-col item-start gap-2 mb-4">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="px-3 py-1 rounded-xl placeholder-primary-600 text-primary-900" />
                            </div>
                            <div className="flex flex-col item-start gap-2 mb-4">
                                <label htmlFor="quesitonType">Question Type</label>
                                <select
                                    name="questionType"
                                    value={questionType}
                                    onChange={(e) => setQuestionType(e.target.value)}
                                    required
                                    className={`px-3 py-1 rounded-xl ${questionType ? "text-primary-900 " : "text-primary-600 "}`}
                                >
                                    <option value="">Select Question Type</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="community">Community Booth</option>
                                    <option value="venue">Venue Question</option>
                                </select>
                            </div>
                            <div className="flex flex-col item-start gap-2 mb-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="email@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="px-3 py-1 rounded-xl placeholder-primary-600 text-primary-900" />
                            </div>
                            <div className="flex flex-col item-start gap-2 mb-4">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="6"
                                    placeholder="Enter Message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="px-3 py-1 rounded-xl placeholder-primary-600 text-primary-900"></textarea>
                            </div>
                            <Button
                                variant="outline"
                                className="hover:bg-lilac hover:text-primary-900">

                                <button type="submit">Submit Form</button>
                            </Button>

                        </form>
                        <div className={`${errorMessage ? " p-4 rounded-lg bg-primary-700 flex gap-2" : "hidden"}`}>
                            <MessageCircleX className="text-red-400" />
                            <p className=" ">
                                {errorText} Or email us directly at&nbsp;
                                <a href="mailto:info@cloudsummit.ca">info@cloudsummit.ca</a>
                            </p>
                        </div>
                    </section>
                </div>
            </main >
            <Footer />
        </div >
    );
}
