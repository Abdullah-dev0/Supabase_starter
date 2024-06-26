//used to exchange the code for a session token and store it in a cookie


import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const resquestUrl = new URL(request.url);
   const { searchParams } = resquestUrl;
   const code = searchParams.get("code");

   if (code) {
      const cookieStore = cookies();
      const supabase = createServerClient(
         process.env.NEXT_PUBLIC_SUPABASE_URL!,
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
         {
            cookies: {
               get(name: string) {
                  return cookieStore.get(name)?.value;
               },
               set(name: string, value: string, options: CookieOptions) {
                  cookieStore.set({ name, value, ...options });
               },
               remove(name: string, options: CookieOptions) {
                  cookieStore.delete({ name, ...options });
               },
            },
         }
      );
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
         return NextResponse.redirect(resquestUrl.origin + "/dashboard");
      }
   }

   // return the user to an error page with instructions
   return NextResponse.redirect(`${resquestUrl.origin}/auth/auth-code-error`);
}
