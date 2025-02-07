"use client"

import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from 'jspdf';
import debounce from 'lodash/debounce';
import { FormDataType } from '@/app/justification-letter/page';
interface Props {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

export default function JustificationLetterPDF({ formData, setFormData }: Props) {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [debouncedFormData, setDebouncedFormData] = useState(formData);
    const pdfRef = useRef<HTMLDivElement>(null);
    const currentDate = new Date();

    const debouncedUpdate = debounce((newData: any) => {
        setDebouncedFormData(newData);
    }, 800);

    const calculateTotalCost = () => {
        const registrationFee = currentDate > new Date('2025-03-01') ? 60 : 30;
        const travelCost = formData.travelCost || 0;
        console.log(typeof travelCost);
        return registrationFee + travelCost;
    };

    useEffect(() => {
        debouncedUpdate(formData);
        return () => {
            debouncedUpdate.cancel();
        };
    }, [formData]);

    useEffect(() => {
        updatePdfPreview();
    }, [debouncedFormData]);

    const updatePdfPreview = () => {
        const doc = new jsPDF();
        doc.setProperties({
            title: 'Justification Letter',
        });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        let yPos = 20;
        const lineHeight = 6;
        const margin = 20;
        const pageWidth = doc.internal.pageSize.width;

        // Subject
        doc.setFont('helvetica', 'bold');
        doc.text('Subject: Request for Approval to Attend Cloud Summit 2025', margin, yPos);

        yPos += lineHeight * 3;

        // Greeting
        doc.setFont('helvetica', 'normal');
        doc.text(`Dear ${formData.managerName || "[Boss's Name]"},`, margin, yPos);

        yPos += lineHeight * 1;

        // Introduction paragraph
        const introText = `I am writing to request approval to attend Cloud Summit 2025 scheduled for May 27th, 2025, in Vancouver. This event is Western Canada's leading cloud-focused conference, bringing together top industry experts, innovators, and practitioners to discuss emerging technologies, best practices, and trends in cloud computing.`;
        const splitIntro = doc.splitTextToSize(introText, pageWidth - 2 * margin);
        doc.text(splitIntro, margin, yPos);

        yPos += splitIntro.length * lineHeight + lineHeight * 0.5;

        // Benefits section
        doc.setFont('helvetica', 'bold');
        doc.text(`Key Benefits to ${formData.company || "[Company Name]"}:`, margin, yPos);

        yPos += lineHeight * 1;

        // Benefits list
        doc.setFont('helvetica', 'normal');
        const benefits = [
            ...(formData.specificProject ? [{
                title: "Expert Insights on Cloud Innovation",
                text: `Attending this summit will provide cutting-edge knowledge on cloud strategies, solutions, and emerging trends that could directly benefit our ongoing ${formData.specificProject} by ensuring alignment with the latest industry advancements.`
            }] : []),
            {
                title: "Networking Opportunities",
                text: "The event offers unparalleled access to industry leaders and peers, creating opportunities to discuss challenges, share insights, and potentially form valuable partnerships or collaborations."
            },
            ...(formData.specificTeam ? [{
                title: "Skills Development",
                text: `The summit agenda includes technical sessions and keynote presentations designed to deepen expertise in cloud technologies. These sessions can enhance my ability to contribute to ${formData.specificTeam} and mentor colleagues on these topics.`
            }] : []),
            {
                title: "Immediate ROI",
                text: "Post-event, I will consolidate and share key takeaways with the team, ensuring the knowledge gained benefits the organization broadly and maximizes the return on this investment."
            }
        ];

        benefits.forEach((benefit, index) => {
            doc.setFont('helvetica', 'bold');
            doc.text(`${index + 1}. ${benefit.title}`, margin + 5, yPos);
            yPos += lineHeight;

            doc.setFont('helvetica', 'normal');
            const splitBenefit = doc.splitTextToSize(benefit.text, pageWidth - 3 * margin);
            doc.text(splitBenefit, margin + 10, yPos);
            yPos += splitBenefit.length * lineHeight + lineHeight / 2;
        });

        // Cost section
        yPos += lineHeight / 2;
        doc.setFont('helvetica', 'bold');
        doc.text('Cost-Benefit Overview:', margin, yPos);

        yPos += lineHeight * 1;
        doc.setFont('helvetica', 'normal');
        doc.text(`• Registration Fee: ${currentDate > new Date('2025-03-01') ? '$60' : '$30'}`, margin + 5, yPos);

        if (formData.travelCost > 0) {
            yPos += lineHeight;
            doc.text(`• Travel/Accommodation: $${formData.travelCost}`, margin + 5, yPos);
        }

        yPos += lineHeight;
        doc.text(`• Total Estimated Investment: $${calculateTotalCost()}`, margin + 5, yPos);

        yPos += lineHeight * 1;

        // Alignment with Company Goals
        if (formData.goal) {
            yPos += lineHeight;
            doc.setFont('helvetica', 'bold');
            doc.text('Alignment with Company Goals:', margin, yPos);

            yPos += lineHeight * 1;

            doc.setFont('helvetica', 'normal');
            const companyGoalsText = `The topics covered at the Cloud Summit, such as ${formData.agenda || '[specific agenda items or themes relevant to your role/team]'}, directly align with our strategic objectives to ${formData.goal || '[specific goal, e.g., modernize IT infrastructure, enhance cloud security, improve operational efficiency]'}.`;
            const splitCompanyGoalsText = doc.splitTextToSize(companyGoalsText, pageWidth - 2 * margin);
            doc.text(splitCompanyGoalsText, margin, yPos)

            yPos += lineHeight * 2;
        }


        // Ending section
        yPos += lineHeight;
        doc.setFont('helvetica', 'normal');
        const outroText = `Thank you for considering this request. Attending the Cloud Summit 2025 will not only benefit my professional development but also directly support ${formData.company || '[Company Name]'}'s growth and innovation initiatives.`;
        const splitOutro = doc.splitTextToSize(outroText, pageWidth - 2 * margin);
        doc.text(splitOutro, margin, yPos);


        yPos += lineHeight * 3;
        doc.text(`Please let me know if you need any additional details or if we can discuss further.`, margin, yPos);

        yPos += lineHeight * 3;
        doc.text(`${formData.name || '[Your Name]'}`, margin, yPos);

        yPos += lineHeight * 1;
        doc.text(`${formData.title || '[Your Title]'}`, margin, yPos);

        yPos += lineHeight * 1;
        doc.text(`${formData.company || '[Company Name]'}`, margin, yPos);

        const pdfDataUri = `data:application/pdf;filename=justification-letter.pdf;base64,${btoa(doc.output())}`;
        console.log(pdfDataUri);
        setPdfUrl(pdfDataUri);
    };



    const handlePrint = () => {
        window.print();

    }


    const handleSave = () => {
        //TODO: generate print pdf

    }

    return (
        <div className="min-h-screen bg-gray-900 text-white w-full">
            <section ref={pdfRef} className="w-full rounded-lg border text-card-foreground shadow-sm bg-gray-800 border-gray-700 p-8 flex-grow">
                {/* <div className=" flex justify-end mb-4 max-w-4xl mx-auto">
                    <a onClick={handleSave} className="bg-blue-600 mx-2 px-4 py-2 rounded-md">
                        <img alt='Save as PDF' src='/justification-letter/download.svg'></img>
                    </a>
                    <a onClick={handlePrint} className="bg-blue-600 mx-2 px-4 py-2 rounded-md">
                        <img alt='Print' src='/justification-letter/printer.svg'></img>
                    </a>
                </div> */}
                {/* <div className="w-full h-full min-h-dvh md:min-w-2xl">
                    <iframe
                        className="pdfobject w-full h-full min-h-dvh"
                        src={pdfUrl || ''}
                    />
                </div> */}



                <div className='pdf-content text-sm '>
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

                        {formData.travelCost > 0 && (
                            <li> Travel/Accommodation: ${formData.travelCost}</li>
                        )}

                        <li>Total Estimated Investment: ${calculateTotalCost().toFixed(2)}</li>
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

            </section>

        </div >
    )
}
