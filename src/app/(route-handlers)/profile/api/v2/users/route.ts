// for version 2 of the API
// This route handler returns a list of users 
/*
* In api/v1/users, we already have a simple structure for user data.
* In api/v2/users, we add some more 
* 
*   id: string; 
    email: string;
    fullName: string; 
    createdAt: string; 

    // The Nextjs will be not re-render the whole thing
    and now we add some more details. as version v2 of the API
    by adding
    name, status, lastLogAt, profiles, preferences

*/

// assign type
type UserV2 = {
    id: string; // long unique identifier for the user
    email: string;
    fullName: string; // <-- full name of user
    createdAt: string; // full format time

    name: {
        first: string;
        last: string;
        middle?: string;
    }

    status: "active" | "inactive" | "suspended";
    lastLogAt: string | null;
    profiles: {
        avatar: string | null; // URL to the user's avatar image
        title: string | null; // Job title of the user
        department: string | null; // Department of the user
    }

    preferences: {
        language: string | null;
        timezone: string | null;
        emailNotifications: boolean | null;
    }

};

export async function GET() {

    const users: UserV2[] = [
        {
            id: "1",
            email: "user1@example.com",
            fullName: "User One",
            createdAt: "2023-01-01",
            name: {
                first: "User",
                last: "One"
            },
            status: "active",
            lastLogAt: "2023-01-01T12:00:00Z",
            profiles: {
                avatar: "https://example.com/avatars/user1.png",
                title: "Software Engineer",
                department: "Engineering"
            },
            preferences: {
                language: "en",
                timezone: "UTC",
                emailNotifications: true
            }
        },
        {
            id: "2",
            email: "user2@example.com",
            fullName: "User Two",
            createdAt: "2023-01-02",
            name: {
                first: "User",
                last: "Two"
            },
            status: "inactive",
            lastLogAt: "2023-01-02T12:00:00Z",
            profiles: {
                avatar: "https://example.com/avatars/user2.png",
                title: "Product Manager",
                department: "Product"
            },
            preferences: {
                language: "fr",
                timezone: "UTC+1",
                emailNotifications: false
            }
        }
    ]

    return new Response(JSON.stringify(users), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

