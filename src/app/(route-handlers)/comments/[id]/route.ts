
import { comments } from "../data";

export async function GET(
    _request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));

    return Response.json(comment || { error: "Comment not found" });
}

// PATCH request to update a comment
// Example: PATCH /comments/1 with body { "text": "Updated comment text" }
export async function PATCH(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    // const comment = comments.find((comment) => comment.id === parseInt(id));
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index].text = text;
    return Response.json(comments[index] || { error: "Comment not found" });
}

// DELETE request to delete a comment
// Example: DELETE /comments/1

export async function DELETE(_request: Request, {
    params
}: {
    params: Promise<{ id: string}>;
}) {
    const { id } = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment || { error: "Comment not found" });
}
