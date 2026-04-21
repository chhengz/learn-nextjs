import { Button } from "@/components/Button"

export const metadata = {
    title: "Blog Page"
}

export default async function Blog() {

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating a delay

    return (<>
    <h1>Blog page</h1>
    <div className="mt-2 flex space-x-2 space-y-2 flex-wrap">
            <Button href="/blog/first">Go to Blog 1</Button>
            <Button href="/blog/second">Go to Blog 2</Button>
    </div>
    </>
    )
    
};
