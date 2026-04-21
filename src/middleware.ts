// Middleware

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));

    // if(request.nextUrl.pathname === '/profile') {
    //     return NextResponse.redirect(new URL("/hello", request.nextUrl));
    // }

    const response = NextResponse.next();
    
    // setting cookie
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    // custom header
    response.headers.set("custom-header", "custom-value");

    return response;

}

// export const config = {
//     matcher: "/profile"
// }