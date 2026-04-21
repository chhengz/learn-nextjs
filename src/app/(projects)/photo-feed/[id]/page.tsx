import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import { Button } from "@/components/Button";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 py-10 flex flex-col items-center text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">{photo.name}</h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6 max-w-3xl">
        <Image
          src={photo.src}
          alt={photo.name}
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4">{photo.description}</p>
        <p className="text-sm text-gray-600">📍 Location: {photo.location}</p>
      </div>

      <Button href="/photo-feed" className="mt-8">
        ← Back to List
      </Button>
    </div>
  );
}
