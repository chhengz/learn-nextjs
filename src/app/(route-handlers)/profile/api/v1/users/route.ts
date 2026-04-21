// Redirect to the new API version
import { redirect } from "next/navigation";



// assign type
type UserV1 = {
    id: string;
    email: string;
    fullName: string; // <-- full name of user
    createdAt: string;
};

export async function GET() {
    
    // for this line it will redirect to api/v2/users
    // and dont go down to run any code on the bottom
    redirect("/profile/api/v2/users");

    // if we apply this : redirect("/profile/api/v2/users");
    // the code below will not run

    const users: UserV1[] = [
        {
            id: "1",
            email: "user1@example.com",
            fullName: "User One",
            createdAt: "2023-01-01"
        },
        {
            id: "2",
            email: "user2@example.com",
            fullName: "User Two",
            createdAt: "2023-01-02"
        }
    ]



    return new Response(JSON.stringify(users), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

