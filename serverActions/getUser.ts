"use server";

import { createServer } from "@/lib/supabase/server";

//getttig user session form Authentication.

//use anyone of the below function to get user session

export async function userSession() {
   const supabase = await createServer();

   return supabase.auth.getUser();
}

//getting user from database

export const getUserFromDatabase = async (id: any) => {
   const supabase = await createServer();
   try {
      const user = supabase.from("users").select("*").eq("id", id).single();

      if (!user) {
         console.log("User not found");
      }

      return user;
   } catch (error) {
      console.log(error);
   }
};
