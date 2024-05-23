"use server";

import { createServer } from "@/lib/supabase/server";
import console from "console";
import { redirect } from "next/navigation";

//Don't try to use redirect in try catch block it will not work as expected maybe bug

export async function login(formData: { email: string; password: string }) {
   const supabase = await createServer();

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

   const { error: userError, data: datauser } = await supabase
      .from("users")
      .select("email")
      .eq("email", data?.user?.email);

   console.log(datauser, "datauser");
   console.log(userError, "userError");

   // storing some extra data in the user table you can store any data you want but don't forget to update the table schema

   const { error: updateError } = await supabase
      .from("users")
      .update({
         display_name: formData.username,
         email_verified: data?.user?.user_metadata.email_verified,
      })
      .eq("email", data?.user?.email)
      .is("display_name", null);

   if (updateError) {
      console.log(updateError, "updateError");
   }

   return {
      success:
         "We have sent you an email to verify your account. Please verify your account to login.",
   };
}
