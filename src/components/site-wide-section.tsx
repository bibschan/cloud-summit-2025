"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface SiteWideMessageProps {
  isVisible: string;
  handleClose: () => void;
}

export const SiteWideMessage: React.FC<SiteWideMessageProps> = ({
  isVisible,
  handleClose,
}) => {
  const message = process.env.NEXT_PUBLIC_BANNER_MESSAGE || "Default message";

  if (isVisible === "hidden" || isVisible === "initial") return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 p-4 } flex items-center justify-between shadow-md transition-all duration-300 ease-in-out animate-slide-down bg-brink-pink`}
    >
      <div className="text-center flex-grow mr-4">{message}</div>
      <button
        onClick={handleClose}
        className="rounded-full p-1 transition-colors duration-200 "
        aria-label="Close message"
      >
        <X size={24} />
      </button>
    </div>
  );
};
