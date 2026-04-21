"use client";

import { useState } from "react";

interface WrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error occurred",
}: {
    message?: string;
}) => {
    
    const [error, setError] = useState(false)

    if (error) throw new Error(message);

    return (
        <button 
        title="Click to simulate an error"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
        onClick={() => setError(true)}>
            Simulate Error
        </button>
    );
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300 bg-white shadow-md">
            <div className="absolute top-0 left-4 -translate-y-1/2">
                <ErrorSimulator message="Simulated error in root layout" />
            </div>
            {children}
        </div>
    )
}



