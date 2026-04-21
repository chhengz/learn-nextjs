"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import * as motion from "motion/react-client";

type Wonder = {
  id: string;
  name: string;
  src: StaticImageData;
};

export default function TempleCard({
  wonder,
  index,
}: {
  wonder: Wonder;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/photo-feed/${wonder.id}`}
        className="group bg-white p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300 block"
      >
        <div className="overflow-hidden rounded-lg">
          <Image
            src={wonder.src}
            alt={wonder.name}
            width={400}
            height={250}
            className="rounded-lg group-hover:scale-105 transition-transform duration-300 object-cover w-full h-[200px]"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold group-hover:text-blue-600 transition-colors">
          {wonder.name}
        </h2>
      </Link>
    </motion.div>
  );
}
