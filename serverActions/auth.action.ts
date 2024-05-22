"use server";

import { createServer } from "@/lib/supabase/server";
import console from "console";

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

export async function signup(formData: {
   email: string;
   password: string;
   username: string;
}) {
   // Initialize Supabase client
   const supabase = await createServer();

   // User data for sign-up
   const userdata = {
      email: formData.email,
      password: formData.password,
   };

   // Sign up user
   const { error, data } = await supabase.auth.signUp(userdata);

   if (error) {
      return { error: error.message };
   }

   const { error: updateError, data: updateData } = await supabase
      .from("users")
      .update({
         display_name: formData.username,
         email_verified: data?.user?.user_metadata.email_verified,
      })
      .eq("id", data?.user?.id)
      .is("display_name", null);

   if (updateError) {
      console.log(updateError);
   }

   // Redirect to dashboard
   return redirect("/dashboard");
}
