'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react'

interface SiteWideMessageProps {
    message: string;
    isVisible: boolean;
    onClose?: () => void;
}

export const SiteWideMessage: React.FC = () => {
    const message = process.env.NEXT_PUBLIC_MESSAGE_CONTENT || 'Default message';
    const initialVisibility = process.env.NEXT_PUBLIC_SHOW_MESSAGE === 'true';

    const [visible, setVisible] = useState(initialVisibility);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible || !initialVisibility) return null;


    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 p-4 } flex items-center justify-between shadow-md transition-all duration-300 ease-in-out animate-slide-down bg-brink-pink`}
        >
            <div className="text-center flex-grow mr-4">
                {message}
            </div>
            <button
                onClick={handleClose}
                className="
            hover:bg-gray-200 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Close message"
            >
                <X size={24} />
            </button>
        </div>
    );
};
