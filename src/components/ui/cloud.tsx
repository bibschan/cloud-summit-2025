import React from "react";
import styles from "./cloud.module.css";
import { cn } from "@/lib/utils";

interface CloudProps {
  className?: string;
}

const Cloud: React.FC<CloudProps> = ({ className = "" }) => {
  return (
    <div className={cn("absolute mt-16 w-36 h-11 bg-gray-300 shadow-[10px_10px_rgba(0,0,0,0.2)] rounded-full", className)}>
      <div className="absolute w-12 h-12 -top-8 left-6 bg-gray-300 rounded-full" />
      <div className="absolute w-16 h-16 -top-10 left-[3.875rem] bg-gray-300 rounded-full" />
    </div>
  );
};

export default Cloud;
