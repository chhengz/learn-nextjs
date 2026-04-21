'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import wondersImages from "../../wonders";
import { useEffect } from "react";
import { motion } from "framer-motion";
import React from 'react'; // Import React to use React.use()

export default function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>; // Change the type to Promise
}) {
  const router = useRouter();

  // Use React.use() to unwrap the params Promise
  const unwrappedParams = React.use(params);
  const photo = wondersImages.find((p) => p.id === unwrappedParams.id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full"
    >
      <button
        onClick={() => router.back()}
        className="text-sm text-gray-600 hover:text-gray-900 float-right"
        aria-label="Close modal"
      >
        ✕ Close
      </button>
      <h1 className="text-3xl font-semibold mb-4">{photo.name}</h1>
      <Image
        src={photo.src}
        alt={photo.name}
        width={800}
        height={500}
        className="rounded-lg mb-4 object-cover w-full h-auto"
      />
      <p className="text-gray-700 mb-2">{photo.description}</p>
      <p className="text-sm text-gray-500">📍 Location: {photo.location}</p>
    </motion.div>
  );
}