import React from "react";

interface CloudProps {
  className?: string;
}

const Cloud: React.FC<CloudProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute mt-16 w-36 h-11 bg-gray-300 shadow-cloud rounded-full ${className}`}
    >
      <div
        className="absolute w-12 h-12 bg-gray-300 rounded-full"
        style={{ top: "-2rem", left: "1.5rem" }}
      ></div>
      <div
        className="absolute w-16 h-16 bg-gray-300 rounded-full"
        style={{ top: "-2.5rem", left: "3.875rem" }}
      ></div>
    </div>
  );
};

export default Cloud;
