
import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";


export async function GET(request: NextRequest)
{
    // const requrstHeader = new Headers(request.headers);
    // console.log("Request Headers:", requrstHeader.get("Authorization"));

    // 1, headers()
    // get all headers from building function in Nextjs
    const headerList = await headers();
    // get header Authorization
    console.log(JSON.stringify({
        authorization: headerList.get("Authorization")
    }));

    // 2, cookies()
    // get cookie from request (provide by client)
    const theme = request.cookies.get("theme");
    console.log(theme);

    // get all cookies from building function in Nextjs
    const cookieStore = await cookies();
    // set cookies {name pages with values 20}
    cookieStore.set("pages", "20");

    // log cookie on console
    console.log(cookieStore.get("pages"));

    
    const htmlText = `<h1>Api data</h1>`;
    // return api as HTML style
    return new Response(htmlText, {
        headers: {
            "Content-Type": "text/html", // <-- html type
            "Set-Cookie": "theme=dark" // <-- set cookie theme to dark
        }
    });
}