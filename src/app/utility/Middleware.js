import { NextResponse } from "next/server";
import { parse } from "cookie";

export function middleware(req) {
    const { pathname } = req.nextUrl; // Get current route
    console.log(">>>>>>>>>>>>>>>> ", pathname);
    const cookies = parse(req.headers.get("cookie") || "");
    const isLoggedIn = cookies.token; // Replace 'token' with your actual auth cookie name

    // Unprotected Routes
    const unprotectedRoutes = [
        "/home",
        "/contact-us",
        "/admin/login",
        "/admin/register",
        "/image-gallery"];
    // Protected Routes
    const protectedRoutes = ["/admin/dashboard"];

    if (isLoggedIn && unprotectedRoutes.includes(pathname)) {
        // If logged in, redirect away from unprotected routes
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    if (!isLoggedIn && protectedRoutes.includes(pathname)) {
        // If not logged in, redirect away from protected routes
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // Allow access to the route
    return NextResponse.next();
}

export const config = {
    matcher: ["/home",
        "/contact-us",
        "/image-gallery",
        "/admin/login",
        "/admin/register",
        "/admin/dashboard"], // Add other relevant routes
};
