"use client";


import { useRouter } from "next/navigation";

const className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer";

export default function OrderProductPage() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Product added to cart");
        router.push("/");
    }

    return (
        <div className="p-6 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Order Product</h1>

            <button className={className} onClick={handleClick}>Add to Cart</button>

            <div className="mt-4 space-x-2">
                <button className={className} onClick={() => {
                    console.log("Back to Home");
                    router.back();
                }}>{"<"}</button>
                <button className={className} onClick={() => {
                    console.log("Previous page");
                    router.forward();
                }}>{">"}</button>
            </div>

        </div>
    );
}