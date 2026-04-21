// NextRequest is the built-in request object in Next.js
// Use NextRequest to access the request object in our route handlers.


import { NextRequest } from "next/server";
import { comments } from "./data";

//  {
//         id: 1,
//         text: "This is a great article!",
//     },

// GET
// export async function GET() {
//     return Response.json(comments);
// }


// GET request by Query
// Example: GET /comments?search=great
export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams; // Get search parameters from the request URL
    const searchTerm = searchParams.get("search"); // Get the search term from the query parameters
    
    const filteredComments = searchTerm
    ? comments.filter((comment) => comment.text.includes(searchTerm))
    : comments;

    return Response.json(filteredComments);
}


// GET request by Query
// Example: GET /comments?search=great
// export async function GET(request: Request) {
//     const url = new URL(request.url);
//     const searchTerm = url.searchParams.get("search");
//     const filteredComments = searchTerm
//         ? comments.filter((comment) => comment.text.includes(searchTerm))
//         : comments;
//     return Response.json(filteredComments);
// }




// POST
// Example request body: { "text": "This is a new comment" }
// OUTPUT: { "id": 1, "text": "This is a new comment" }
// {"id": 1} is the unique identifier for the new comment

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1, // Unique identifier for the new comment
        text: comment.text,
    };

    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201,
    });
}
