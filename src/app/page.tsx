"use client";


import { Button } from "@/components/Button";


const buttonLink = [
  { href: "/blog", label: "Go to Blog" },
  { href: "/products", label: "Go to Products" },
  { href: "/articles", label: "Go to Articles" },
  { href: "/dashboard", label: "Go to Dashboard" },
  { href: "/order-product", label: "Go to Order Product" },
  { href: "/complex-dashboard", label: "Go to Complex Dashboard" },
  { href: "/f1", label: "Go to F1" },
  { href: "/photo-feed", label: "Go to Photo Feed" },
  { href: "/tap", label: "Go to Tap" },
]



export default function Home() {
  return (
    <div className=" bg-gray-100 text-gray-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Home page</h1>

      <div className="flex space-x-2 space-y-2 flex-wrap items-center justify-center">
        {buttonLink.map((link) => (
          <Button key={link.href} href={link.href}>
            {link.label}
          </Button>
        ))}
      </div>

      <div className="flex space-x-2 space-y-2 flex-wrap">
        <Button href="/articles/breaking-news-123?lang=en">Read in English</Button>
        <Button href="/articles/breaking-news-123?lang=km">Read in Khmer</Button>
      </div>

    </div>
  );
}
