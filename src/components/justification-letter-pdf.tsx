"use client";

import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import debounce from "lodash/debounce";
import { FormDataType } from "@/app/justification-letter/page";
interface Props {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

export default function JustificationLetterPDF({
  formData,
  setFormData,
}: Props) {
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [debouncedFormData, setDebouncedFormData] = useState(formData);
  const pdfRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedUpdate = debounce((newData: any) => {
    setDebouncedFormData(newData);
  }, 300);

  const calculateTotalCost = () => {
    const registrationFee = currentDate > new Date("2025-03-01") ? 60 : 30;
    const travelCost = formData.travelCost || 0;
    return registrationFee + travelCost;
  };

  useEffect(() => {
    debouncedUpdate(formData);
    return () => {
      debouncedUpdate.cancel();
    };
  }, [formData, debouncedUpdate]);

  useEffect(() => {
    updatePdfPreview();
  }, [debouncedFormData]);

  const updatePdfPreview = () => {
    setLoading(true);

    const doc = new jsPDF();
    doc.setProperties({
      title: "Conference Attendance Justification Letter",
    });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    let yPos = 20;
    const lineHeight = 6;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;

    // Subject
    doc.setFont("helvetica", "bold");
    doc.text(
      "Subject: Request for Approval to Attend Cloud Summit 2025",
      margin,
      yPos
    );

    yPos += lineHeight * 3;

    // Greeting
    doc.setFont("helvetica", "normal");
    doc.text(`Dear ${formData.managerName || "[Boss's Name]"},`, margin, yPos);

    yPos += lineHeight * 1;

    // Introduction paragraph
    const introText = `I am writing to request approval to attend Cloud Summit 2025 scheduled for May 27th, 2025, in Vancouver. This event is Western Canada's leading cloud-focused conference, bringing together top industry experts, innovators, and practitioners to discuss emerging technologies, best practices, and trends in cloud computing.`;
    const splitIntro = doc.splitTextToSize(introText, pageWidth - 2 * margin);
    doc.text(splitIntro, margin, yPos);

    yPos += splitIntro.length * lineHeight + lineHeight * 0.5;

    // Benefits section
    doc.setFont("helvetica", "bold");
    doc.text(
      `Key Benefits to ${formData.company || "[Company Name]"}:`,
      margin,
      yPos
    );

    yPos += lineHeight * 1;

    // Benefits list
    doc.setFont("helvetica", "normal");
    const benefits = [
      ...(formData.specificProject
        ? [
            {
              title: "Expert Insights on Cloud Innovation",
              text: `Attending this summit will provide cutting-edge knowledge on cloud strategies, solutions, and emerging trends that could directly benefit our ongoing ${formData.specificProject} by ensuring alignment with the latest industry advancements.`,
            },
          ]
        : []),
      {
        title: "Networking Opportunities",
        text: "The event offers unparalleled access to industry leaders and peers, creating opportunities to discuss challenges, share insights, and potentially form valuable partnerships or collaborations.",
      },
      ...(formData.specificTeam
        ? [
            {
              title: "Skills Development",
              text: `The summit agenda includes technical sessions and keynote presentations designed to deepen expertise in cloud technologies. These sessions can enhance my ability to contribute to ${formData.specificTeam} and mentor colleagues on these topics.`,
            },
          ]
        : []),
      {
        title: "Immediate ROI",
        text: "Post-event, I will consolidate and share key takeaways with the team, ensuring the knowledge gained benefits the organization broadly and maximizes the return on this investment.",
      },
    ];

    benefits.forEach((benefit, index) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${index + 1}. ${benefit.title}`, margin + 5, yPos);
      yPos += lineHeight;

      doc.setFont("helvetica", "normal");
      const splitBenefit = doc.splitTextToSize(
        benefit.text,
        pageWidth - 3 * margin
      );
      doc.text(splitBenefit, margin + 10, yPos);
      yPos += splitBenefit.length * lineHeight + lineHeight / 2;
    });

    // Cost section
    yPos += lineHeight / 2;
    doc.setFont("helvetica", "bold");
    doc.text("Cost-Benefit Overview:", margin, yPos);

    yPos += lineHeight * 1;
    doc.setFont("helvetica", "normal");
    doc.text(
      `• Registration Fee: ${
        currentDate > new Date("2025-03-01") ? "$60" : "$30"
      }`,
      margin + 5,
      yPos
    );

    if (formData.travelCost > 0) {
      yPos += lineHeight;
      doc.text(
        `• Travel/Accommodation: $${formData.travelCost}`,
        margin + 5,
        yPos
      );
    }

    yPos += lineHeight;
    doc.text(
      `• Total Estimated Investment: $${calculateTotalCost()}`,
      margin + 5,
      yPos
    );

    yPos += lineHeight * 1;

    // Alignment with Company Goals
    if (formData.goal) {
      yPos += lineHeight;
      doc.setFont("helvetica", "bold");
      doc.text("Alignment with Company Goals:", margin, yPos);

      yPos += lineHeight * 1;

      doc.setFont("helvetica", "normal");
      const companyGoalsText = `The topics covered at the Cloud Summit, such as ${
        formData.agenda ||
        "[specific agenda items or themes relevant to your role/team]"
      }, directly align with our strategic objectives to ${
        formData.goal ||
        "[specific goal, e.g., modernize IT infrastructure, enhance cloud security, improve operational efficiency]"
      }.`;
      const splitCompanyGoalsText = doc.splitTextToSize(
        companyGoalsText,
        pageWidth - 2 * margin
      );
      doc.text(splitCompanyGoalsText, margin, yPos);

      yPos += lineHeight * 2;
    }

    // Ending section
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    const outroText = `Thank you for considering this request. Attending the Cloud Summit 2025 will not only benefit my professional development but also directly support ${
      formData.company || "[Company Name]"
    }'s growth and innovation initiatives.`;
    const splitOutro = doc.splitTextToSize(outroText, pageWidth - 2 * margin);
    doc.text(splitOutro, margin, yPos);

    yPos += lineHeight * 3;
    doc.text(
      `Please let me know if you need any additional details or if we can discuss further.`,
      margin,
      yPos
    );

    yPos += lineHeight * 3;
    doc.text(`${formData.name || "[Your Name]"}`, margin, yPos);

    yPos += lineHeight * 1;
    doc.text(`${formData.title || "[Your Title]"}`, margin, yPos);

    yPos += lineHeight * 1;
    doc.text(`${formData.company || "[Company Name]"}`, margin, yPos);

    const pdfDataUri = `data:application/pdf;filename=justification-letter.pdf;base64,${btoa(
      doc.output()
    )}`;
    setPdfUrl(pdfDataUri);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      <section
        ref={pdfRef}
        className="w-full rounded-lg border text-card-foreground shadow-sm bg-gray-800 border-gray-700 md:p-8 flex-grow"
      >
        <div className="w-full h-full min-h-dvh md:min-w-2xl">
          {loading ? (
            <div className="loader text-center text-[50px] transition-all">
              Loading...
            </div>
          ) : (
            <iframe
              className="pdfobject w-full h-full min-h-dvh"
              src={pdfUrl || ""}
            />
          )}
        </div>
      </section>
    </div>
  );
}
