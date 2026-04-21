"use client";

import { usePathname } from "next/navigation"

export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen text-center">
            <h2 className="font-bold text-4xl">Review Not Found</h2>
            <p className="text-red-500 text-2xl">The review with ID {reviewId} for product {productId} does not exist.</p>
        </div>
    )
}