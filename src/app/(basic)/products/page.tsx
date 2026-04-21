import Link from "next/link";

const linkClassName = "text-blue-500 hover:underline hover:text-blue-400";

export default function ProductPage() {
    const productId = [1,2,3,4,5,6,7,8,9,10];
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-4xl p-4">Product Page</h1>
                <p>This is the product page.</p>
                <p>Here you can find all the details about our products.</p>
                <p>Feel free to explore and learn more!</p>
            </div>

            <div><Link href={"/"} className={linkClassName}>Back to Home</Link></div>

            <div className="w-full p-8 mt-8">
                <h2 className="text-xl">Product Lists</h2>
                <ul className="list-disc list-inside">
                    {
                        productId.map((productId) => (
                            <li key={productId} className="hover:text-blue-500 hover:underline w-fit">
                                <Link href={`products/${productId}`}>
                                    Product {productId}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </div>
    );
}
