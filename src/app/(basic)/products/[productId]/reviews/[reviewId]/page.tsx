import { notFound } from "next/navigation";

import Link from "next/link";

function getRandomNumber(count: number): number {
    return Math.floor(Math.random() * count);
}


export default async function ProductReview({
    params,
} : {
    params: Promise<{
        productId: string, 
        reviewId: string
    }>;
}) {

    const random = getRandomNumber(2);

    if (random === 1) {
        // Simulate a random error
        throw new Error("Random error occurred while fetching product review.");
    }

    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 100) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl">Product Reviews</h1>
            <p>Product ID: {productId}</p>
            <p>Review ID: {reviewId}</p>

            

            {/* Back to product page */}
            <p className="mt-4 text-blue-500 underline">
                <Link href={`/products/${productId}`} replace>Back to Product details</Link>
            </p>
        </div>
    );
}