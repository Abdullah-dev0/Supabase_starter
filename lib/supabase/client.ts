"use client";

// Import the createBrowserClient function from the @supabase/ssr package this is used to create a client instance in the browser.

import { createBrowserClient } from "@supabase/ssr";

export function createBroswerClient() {
   return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );
}
