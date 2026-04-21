import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 text-gray-800 px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Wonders of the World
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {wonders.map((wonder, index) => (
          <motion.div
            key={wonder.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group bg-white p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300"
          >
            <Link href={`/photo-feed/${wonder.id}`} className="">
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
        ))}
      </div>
    </div>
  );
}
