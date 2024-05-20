"use client";

import { createClient } from "@/lib/supabase/client";

const AuthProviders = () => {
   const supabase = createClient();
   const onclick = () => {
      supabase.auth.signInWithOAuth({
         provider: "github",
      });
   };
   return (
      <div>
         <button onClick={onclick}>Sign in with Github</button>
      </div>
   );
};

export default AuthProviders;
