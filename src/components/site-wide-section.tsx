'use client'

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'

interface SiteWideMessageProps {
    message: string;
    isVisible: boolean;
    onClose?: () => void;
}

export const SiteWideMessage: React.FC<SiteWideMessageProps> = ({
    message,
    isVisible = true,
    onClose,
}) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    const handleClose = () => {
        setVisible(false);
        onClose && onClose();
    };

    if (!visible) return null;


    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 p-4 } flex items-center justify-between shadow-md transition-all duration-300 ease-in-out animate-slide-down bg-brink-pink`}
        >
            <div className="flex-grow mr-4">
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
