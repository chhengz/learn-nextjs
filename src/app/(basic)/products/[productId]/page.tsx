import Link from "next/link";
import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`);

        }, 1000);
    })

    return {
        title: `Product ${title}`,
        description: `Details of iPhone ${id}`,
    }
}

export default async function ProductDetailPage({ params }: Props) {
    const productId = (await params).productId;
    const reviewId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl">Product Details</h1>
            <p>Product ID: {productId}</p>
            {/* Back to product page */}
            <p className="mt-4 text-blue-500 underline">
                <Link href="/products">Back to Products</Link>
            </p>

            <div className="w-full p-8 mt-8">
                <h2 className="text-xl mt-4">Product Reviews</h2>
                <ul className="list-disc list-inside">
                    {reviewId.map((reviewId) => (
                        <li
                            key={reviewId}
                            className="hover:text-blue-500 hover:underline w-fit"
                        >
                            <Link href={`${productId}/reviews/${reviewId}`}>
                                Review Product {reviewId}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
