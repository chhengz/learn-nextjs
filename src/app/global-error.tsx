"use client";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800">
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-4">Please try again later.</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
