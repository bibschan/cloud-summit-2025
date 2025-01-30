"use client"
import JustificationLetterPDF from "@/components/justification-letter-pdf";
import JustificationLetterForm from "@/components/justification-letter-form";
import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from 'jspdf';

interface FormDataType {
  managerName: string;
  company: string;
  specificProject: string;
  specificTeam: string;
  travelCost: number;
  agenda: string;
  goal: string;
  name: string;
  title: string;
}

export default function JustificationLetter() {
  const [formData, setFormData] = useState<FormDataType>(
    {
      managerName: '',
      company: '',
      specificProject: '',
      specificTeam: '',
      travelCost: 0,
      agenda: '',
      goal: '',
      name: '',
      title: '',
    }
  )


  return (
    <main className="bg-gray-900 text-white pb-6 w-full">
      <h1 className="bg-gray-900 p-4 sm:p-8 text-2xl font-bold">Conference Attendance Justification Letter</h1>
      <div className="flex flex-col md:flex-row gap-4 md:mx-6 md:w-auto">
        <JustificationLetterForm formData={formData} setFormData={setFormData} />
        <JustificationLetterPDF formData={formData} setFormData={setFormData} />
      </div>
    </main>
  )
}
