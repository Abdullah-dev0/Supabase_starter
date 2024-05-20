"use server";

import { createServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function login(formData: { email: string; password: string }) {
   const supabase = await createServer();

   // type-casting here for convenience
   // in practice, you should validate your inputs
   const data = {
      email: formData.email,
      password: formData.password,
   };

   const { error } = await supabase.auth.signInWithPassword(data);

   if (error) {
      return { error: error.message };
   }

   return redirect("/dashboard");
}

export async function signup(formData: { email: string; password: string }) {
   const supabase = await createServer();

   // type-casting here for convenience
   // in practice, you should validate your inputs
   const data = {
      email: formData.email,
      password: formData.password,
   };

   try {
      const { error } = await supabase.auth.signUp(data);

      if (error) {
         return { error: error.message };
      }

      return { success: "User created successfully please Login" };
   } catch (error) {
      console.log(error);
   }
}
