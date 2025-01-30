"use client"

import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from 'jspdf';

export default function JustificationLetterPDF(formData: any, setFormData: any) {

    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const pdfRef = useRef<HTMLDivElement>(null);
    const currentDate = new Date();

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])



    const handlePrint = () => {
        window.print();

    }
    const handleSave = () => {
        //TODO: generate print pdf
    }

    const generatePDF = async () => {
        const doc = new jsPDF();
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);

        doc.text(`Dear ${formData.managerName},`, 20, 20);

        // Add paragraphs with proper spacing
        let yPosition = 40;
        const lineHeight = 7;

        doc.text('I am writing to request approval to attend [Conference Name] in', 20, yPosition);
        yPosition += lineHeight;
        doc.text('[Location] from [Start Date] to [End Date].', 20, yPosition);

        yPosition += lineHeight * 2;
        doc.text('The conference offers numerous benefits including:', 20, yPosition);

        // Add bullet points
        yPosition += lineHeight;
        doc.text('• Access to the latest industry trends', 25, yPosition);
        yPosition += lineHeight;
        doc.text('• Networking opportunities', 25, yPosition);

        // Add signature
        yPosition += lineHeight * 2;
        doc.text(`Best regards,`, 20, yPosition);
        yPosition += lineHeight;
        doc.text(`${formData.name}`, 20, yPosition);
        yPosition += lineHeight;
        doc.text(`${formData.title}`, 20, yPosition);

        // Save the PDF
        doc.save('justification-letter.pdf');
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white ">

            <section ref={pdfRef} className="rounded-lg border text-card-foreground shadow-sm bg-gray-800 border-gray-700 max-w-xl mx-auto mt-8 p-8 flex-grow">
                <div className={`pdf-content ${isSmallScreen ? "text-sm" : "text-base"}`}>
                    <h3 className="mb-4"><span className="font-bold">Subject:</span> Request for Approval to Attend Cloud Summit 2025 </h3>
                </div>
                <div className="prose max-w-none">

                    <p className="mb-4">Dear {formData.managerName || "[Boss's Name]"} ,
                    </p>
                    <p className="mb-4">
                        I am writing to request approval to attend <a href="https://www.cloudsummit.com" target="_blank" rel="noopener noreferrer">Cloud Summit 2025</a> scheduled for May 27th, 2025, in Vancouver. This event is Western Canada&apos;s leading cloud-focused conference, bringing together top industry experts, innovators, and practitioners to discuss emerging technologies, best practices, and trends in cloud computing.
                    </p>

                    <h3 className="mb-4 font-bold">Key Benefits to {formData.company || "[Company Name]"}:
                    </h3>

                    <ol className="mb-4 list-decimal list-inside flex flex-col gap-3">
                        <li>
                            <span className="font-bold">Expert Insights on Cloud Innovation</span>
                            <p className="mx-4">Attending this summit will provide cutting-edge knowledge on cloud strategies, solutions, and emerging trends that could directly benefit our ongoing {formData.specificProject || "[specific project/initiative]"} by ensuring alignment with the latest industry advancements.
                            </p>
                        </li>
                        <li>
                            <span className="font-bold">Networking Opportunities</span>
                            <p className="mx-4">The event offers unparalleled access to industry leaders and peers, creating opportunities to discuss challenges, share insights, and potentially form valuable partnerships or collaborations.
                            </p>
                        </li>
                        <li>
                            <span className="font-bold">Skills Development</span>
                            <p className="mx-4">The summit agenda includes technical sessions and keynote presentations designed to deepen expertise in cloud technologies. These sessions can enhance my ability to contribute to {formData.specificTeam || "[specific team/project goal]"} and mentor colleagues on these topics.</p>
                        </li>
                        <li>
                            <span className="font-bold">Immediate ROI</span>
                            <p className="mx-4">Post-event, I will consolidate and share key takeaways with the team, ensuring the knowledge gained benefits the organization broadly and maximizes the return on this investment.</p>
                        </li>
                    </ol>

                    <h3 className="mb-4">
                        Cost-Benefit Overview:
                    </h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Registration Fee: {currentDate > new Date('2025-03-01') ? '$60.00' : '$30.00'}</li>
                        <li>Travel/Accommodation: {formData.travelCost || "[Cost, if applicable]"} </li>
                        <li>Total Estimated Investment: [Cost]</li>
                    </ul>

                    <h3 className="mt-4 font-bold">Alignment with Company Goals: </h3>
                    <p className="mb-4">
                        The topics covered at the Cloud Summit, such as {formData.agenda || '[specific agenda items or themes relevant to your role/team]'}, directly align with our strategic objectives to {formData.goal || '[specific goal, e.g., modernize IT infrastructure, enhance cloud security, improve operational efficiency]'}.
                    </p>

                    <p className="mb-4">
                        Thank you for considering this request. Attending the Cloud Summit 2025 will not only benefit my professional development but also directly support {formData.company || '[Company Name]'}&apos;s growth and innovation initiatives.
                    </p>
                    <p className="mb-4">
                        Please let me know if you need any additional details or if we can discuss further.
                    </p>

                    <p className="mb-4">
                        Best regards,<br />
                        {formData.name || '[Your Name]'}<br />
                        {formData.title || '[Your Title]'}<br />
                        {formData.company || '[Company Name]'}
                    </p>
                </div>
                <div className=" flex justify-end my-4 max-w-4xl mx-auto">
                <a onClick={handleSave} className="bg-blue-600 mx-2 px-4 py-2 rounded-md">
                    <img alt='Save as PDF' src='/justification-letter/download.svg'></img>
                </a>
                <a onClick={handlePrint} className="bg-blue-600 mx-2 px-4 py-2 rounded-md">
                    <img alt='Print' src='/justification-letter/printer.svg'></img>
                </a>
            </div>
            </section>

        </div >
    )
}
