import React from 'react'
import { FormDataType } from '@/app/justification-letter/page';
interface JustificationLetterFormProps {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

export default function JustificationLetterForm({ formData, setFormData }: JustificationLetterFormProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'travelCost') {
            setFormData(prev => ({
                ...prev,
                [name]: parseFloat(value) || 0
            }));
            return;
        }
        setFormData((prevFormData: FormDataType) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <form className="w-full rounded-lg border text-card-foreground shadow-sm bg-white border-gray-700 max-w-lg md:max-w-md mx-auto md:mx-0 p-8 max-h-fit">
            <label className="text-sm font-medium mb-1 text-black">Your Name</label>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className="block text-sm font-medium mb-1 text-black">Your Title</label>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your title"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />
            <label className="block text-sm font-medium mb-1 text-black">Manager&apos;s Name</label>
            <input
                name="managerName"
                value={formData.managerName}
                onChange={handleChange}
                placeholder="Enter your manager's name"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className="block text-sm font-medium mb-1 text-black">Company</label>
            <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className="text-sm font-medium mb-1 text-black ">Specific Project</label>
            <span className="text-xs text-gray-500 mb-2 pl-2">Optional</span>
            <input
                name="specificProject"
                value={formData.specificProject}
                onChange={handleChange}
                placeholder="Enter your specific project"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className=" text-sm font-medium mb-1 text-black">Specific Team/Goal</label>
            <span className="text-xs text-gray-500 mb-2 pl-2">Optional</span>
            <input
                name="specificTeam"
                value={formData.specificTeam}
                onChange={handleChange}
                placeholder="Enter your specific team/goal"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className=" text-sm font-medium mb-1 text-black">Travel Cost</label>
            <span className="text-xs text-gray-500 mb-2 pl-2">Optional</span>
            <input
                name="travelCost"
                value={formData.travelCost}
                type="number"
                onChange={handleChange}
                placeholder="Enter your travel cost"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className="text-sm font-medium mb-1 text-black">Agenda</label>
            <span className="text-xs text-gray-500 mb-2 pl-2">Optional</span>
            <input
                name="agenda"
                value={formData.agenda}
                onChange={handleChange}
                placeholder="Enter the conference agenda"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />

            <label className="block text-sm font-medium mb-1 text-black">Goal</label>
            <input
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="specific goal, e.g., modernize IT infrastructure, enhance cloud security, improve operational efficiency"
                className="w-full rounded border text-card-foreground shadow-sm bg-white border-gray-300 p-2 text-black mb-4"
            />



        </form >
    )
}
