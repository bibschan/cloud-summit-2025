"use client"
import JustificationLetterPDF from "@/components/justification-letter-pdf";
import JustificationLetterForm from "@/components/justification-letter-form";
import React, { useState, useEffect, useRef } from "react";
import Nav from "@/components/nav";


export interface FormDataType {
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
    <main className=" py-20 bg-gray-900 text-white pb-6 w-full">
      <Nav />
      <h1 className="bg-gray-900 mb-4 px-4 sm:px-8 text-4xl md:text-5xl md:mb-8 text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Conference Attendance Justification Letter</h1>
      <div className="flex flex-col md:flex-row gap-4 md:mx-2 md:w-auto justify-center px-4">
        <JustificationLetterForm  formData={formData} setFormData={setFormData} />
        <JustificationLetterPDF formData={formData} setFormData={setFormData} />
      </div>
    </main>
  )
}
