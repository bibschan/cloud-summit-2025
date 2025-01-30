"use client"

import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from 'jspdf';

export default function JustificationLetterPDF() {
    const [formData, setFormData] = useState(
        {
            name: '',
            title: '',
            company: '',
            managerName: '',
            customAmount: '',
            department: ''
        }
    )
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const pdfRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

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
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold">Conference Attendance Justification Letter</h1>

                <div className="space-y-4 my-4 ">
                    <div>
                        <label className="block text-sm font-medium mb-1">Your Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Your Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter your title"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Company</label>
                        <input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Manager's Name</label>
                        <input
                            name="managerName"
                            value={formData.managerName}
                            onChange={handleChange}
                            placeholder="Enter your manager's name"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="space-x-4">
                    <button onClick={handleSave} className="bg-blue-600 mx-2 px-4 py-2 rounded-md">
                        Save as PDF
                    </button>
                    <button onClick={handlePrint} className="bg-blue-600 mx-2 px-4 py-2 rounded-md">
                        Print
                    </button>
                </div>
            </div>
            <div ref={pdfRef} className="max-w-4xl mx-auto mt-8 p-8 bg-gray-800 rounded-lg shadow-lg">
                <div className={`pdf-content ${isSmallScreen ? "text-sm" : "text-base"}`}>
                    <h2 className="text-2xl font-bold mb-4">Justification Letter</h2>
                    <p className="whitespace-pre-wrap">{formData.title}</p>
                </div>
                <div className="prose max-w-none">
                    <p className="mb-4">Dear {formData.managerName || '[Manager Name]'},</p>

                    <p className="mb-4">
                        I am writing to request approval to attend [Conference Name] in [Location] from [Start Date] to [End Date].
                        This conference is the premier event for professionals in our industry and offers invaluable opportunities
                        for learning, networking, and staying current with industry trends.
                    </p>

                    <p className="mb-4">
                        The conference offers numerous benefits that align directly with our organization's goals and my professional
                        development, including:
                    </p>

                    <ul className="mb-4">
                        <li>Access to the latest industry trends and innovations</li>
                        <li>Networking opportunities with industry leaders and peers</li>
                        <li>Hands-on workshops and training sessions</li>
                        <li>Exposure to best practices and case studies</li>
                    </ul>

                    <p className="mb-4">
                        The total cost to attend would be approximately [Amount], which includes:
                    </p>

                    <ul className="mb-4">
                        <li>Conference Registration: $X</li>
                        <li>Travel Expenses: $X</li>
                        <li>Accommodation: $X</li>
                        <li>Meals and Incidentals: $X</li>
                    </ul>

                    <p className="mb-4">
                        Upon returning, I will share key learnings with our team through a presentation and written report,
                        ensuring that the knowledge gained benefits our entire organization.
                    </p>

                    <p className="mb-4">
                        Thank you for considering this request. I look forward to discussing this opportunity with you.
                    </p>

                    <p className="mb-4">
                        Best regards,<br />
                        {formData.name || '[Your Name]'}<br />
                        {formData.title || '[Your Title]'}<br />
                        {formData.company || '[Company Name]'}
                    </p>
                </div>
            </div>
        </div>
    )
}
