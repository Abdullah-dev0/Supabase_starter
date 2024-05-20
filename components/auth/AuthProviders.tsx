"use client";

import { createBroswerClient } from "@/lib/supabase/client";
import { useState } from "react";
import { Button } from "../ui/button";

const AuthProviders = () => {
   const [loading, setLoading] = useState(false);

   const handleLoginWithGithub = () => {
      try {
         setLoading(true);
         const supabase = createBroswerClient();
         supabase.auth.signInWithOAuth({
            provider: "github",
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
      <div className="mt-12">
         <Button onClick={handleLoginWithGithub}>Sign in with Github</Button>
      </div>
   );
};

export default AuthProviders;
