"use client";
import { createBroswerClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
   const [user, setUser] = useState<[] | any>([]);
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
               <Button onClick={logout}>Logout</Button>
            </div>
         )}
         {!user && <h1>Unauthorized</h1>}
      </div>
   );
};

export default Header;
