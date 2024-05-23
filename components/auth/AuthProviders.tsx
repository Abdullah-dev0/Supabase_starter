"use client";

import { createBroswerClient } from "@/lib/supabase/client";
import { useState } from "react";
import { Button } from "../ui/button";

const AuthProviders = () => {
   const [loading, setLoading] = useState(false);
   const [providers, setProviders] = useState<"github" | "google" | null>(null);

   const handleLogin = (provider: "github" | "google") => {
      try {
         setLoading(true);
         const supabase = createBroswerClient();
         supabase.auth.signInWithOAuth({
            provider: provider,
            options: {
               //redirecting to the callback route

               redirectTo: `${location.origin}/callback`,
            },
         });
         setLoading(false);
      } catch (error) {
         console.log("error", error);
         setLoading(false);
      }
   };
   return (
      <div className="flex gap-3 flex-wrap justify-between">
         <Button onClick={() => handleLogin("github")}>
            Sign in with Github
         </Button>
         <Button onClick={() => handleLogin("google")}>
            Sign in with Google
         </Button>
      </div>
   );
};

export default AuthProviders;
