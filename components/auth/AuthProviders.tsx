"use client";

import { createBroswerClient } from "@/lib/supabase/client";
import { useState } from "react";

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
         <button onClick={handleLoginWithGithub}>Sign in with Github</button>
      </div>
   );
};

export default AuthProviders;
