"use server";

import { createServer } from "@/lib/supabase/server";

export async function userSession() {
   const supabase = await createServer();

   return supabase.auth.getUser();
}
