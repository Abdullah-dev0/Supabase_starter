import { DEFAULT_SIGNIN, privatesRoutes, protectedRoutes } from "@/routes";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

//the only goal of this middleware is to update the session cookie but we have also used it for redirection based upon the user's authentication status.

export async function updateSession(request: NextRequest) {
   let response = NextResponse.next({
      request: {
         headers: request.headers,
      },
   });

   const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
         cookies: {
            get(name: string) {
               return request.cookies.get(name)?.value;
            },
            set(name: string, value: string, options: CookieOptions) {
               request.cookies.set({
                  name,
                  value,
                  ...options,
               });
               response = NextResponse.next({
                  request: {
                     headers: request.headers,
                  },
               });
               response.cookies.set({
                  name,
                  value,
                  ...options,
               });
            },
            remove(name: string, options: CookieOptions) {
               request.cookies.set({
                  name,
                  value: "",
                  ...options,
               });
               response = NextResponse.next({
                  request: {
                     headers: request.headers,
                  },
               });
               response.cookies.set({
                  name,
                  value: "",
                  ...options,
               });
            },
         },
      }
   );

   const user = await supabase.auth.getUser();

   // Redirect if the user is not authenticated and trying to access a private route
   if (user.error && privatesRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
   }

   // Redirect if the user is authenticated and trying to access a protected route
   if (user.data.user && protectedRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL(DEFAULT_SIGNIN, request.url));
   }

   return response;
}
