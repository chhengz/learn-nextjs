// error.tsx
"use client";

export default function ErrorBoundary({ error }: {
    error: Error
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800">
            <h1 className="text-4xl font-bold mb-4">{error.message}</h1>
        </div>
    );
}