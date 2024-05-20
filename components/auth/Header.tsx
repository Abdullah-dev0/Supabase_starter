"use client";
import { createClient } from "@/lib/supabase/client";

const Header = () => {
   const logout = async () => {
      const supabase = createClient();

      await supabase.auth.signOut();
   };
   return (
      <div>
         <button onClick={logout}>logout</button>
      </div>
   );
};

export default Header;
