"use client";
import { createBroswerClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
   const [user, setUser] = useState<[] | any>([]); // [1
   const Router = useRouter();
   const supabase = createBroswerClient();
   const logout = async () => {
      const { error } = await supabase.auth.signOut();
      if (!error) Router.push("/");
   };

   useEffect(() => {
      const getuser = async () => {
         const { data, error } = await supabase.auth.getUser();

         if (data) {
            setUser(data);
         }
         if (error) {
            console.log(error.message);
         }
      };

      getuser();
   }, []);

   return (
      <div>
         {user && (
            <div>
               <h1>Welcome {user?.user?.email}</h1>
               <button onClick={logout}>Logout</button>
            </div>
         )}
         {!user && <h1>Unauthorized</h1>}
      </div>
   );
};

export default Header;
