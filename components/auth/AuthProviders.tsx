"use client";

import { createBroswerClient } from "@/lib/supabase/client";
import { useTransition } from "react";
import { Button } from "../ui/button";

const AuthProviders = () => {
   const [isPendng, startTransition] = useTransition();
   const handleLogin = (provider: "github" | "google") => {
      try {
         startTransition(() => {
            const supabase = createBroswerClient();
            supabase.auth.signInWithOAuth({
               provider: provider,
               options: {
                  //redirecting to the callback route

                  redirectTo: `${location.origin}/callback`,
               },
            });
         });
      } catch (error) {
         console.log("error", error);
      }
   };
   return (
      <div className="flex gap-3 flex-wrap justify-between">
         <Button disabled={isPendng} onClick={() => handleLogin("github")}>
            Sign in with Github
         </Button>
         <Button disabled={isPendng} onClick={() => handleLogin("google")}>
            Sign in with Google
         </Button>
      </div>
   );
};

export default AuthProviders;
