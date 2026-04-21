// error.tsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
// mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition
const className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer";

export default function ErrorBoundary({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800">
            <h1 className="text-4xl font-bold mb-4">{error.message}</h1>
            <button onClick={reload} className={className}>
                Try Again
            </button>
        </div>
    );
}