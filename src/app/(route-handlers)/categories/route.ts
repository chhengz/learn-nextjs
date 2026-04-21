// This route handler returns a list of categories
// caching works on production only
// use npm run build && npm run start to test  

// request onec only and product categories will not updates
export const dynamic = 'force-static'; 

// use revalidate to update caching
// example: export const revalidate = 10; // updates every 10 seconds

export async function GET() {

    const categories = [
        { id: 1, name: "Electronics"},
        { id: 2, name: "Books"},
        { id: 3, name: "Clothing"},
        { id: 4, name: "Home & Garden"}
    ]

    return Response.json(categories);
}