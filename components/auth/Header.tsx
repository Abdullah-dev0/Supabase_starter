"use client";
import { createBroswerClient } from "@/lib/supabase/client";
import { userSession } from "@/serverActions/getUser";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const Header = () => {
   const [user, setUser] = useState<[] | any>([]);
   const Router = useRouter();
   const [isPending, startTransition] = useTransition();
   const supabase = createBroswerClient();

   const logout = async () => {
      startTransition(async () => {
         const { error } = await supabase.auth.signOut();
         if (!error) Router.push("/");
      });
   };

   useEffect(() => {
      const getuser = async () => {
         const user = await userSession();
         setUser(user);
      };

      getuser();
   }, []);

   return (
      <div>
         {user ? (
            <div className="flex justify-between gap-5 w-full items-center bg-gray-800 p-4">
               <h1 className="text-white text-2xl font-bold">Dashboard</h1>
               <button
                  onClick={logout}
                  disabled={isPending}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
               >
                  Logout
               </button>
            </div>
         ) : (
            <div className="flex justify-between items-center bg-gray-800 p-4">
               <h1 className="text-white text-2xl font-bold">Dashboard</h1>
               <button
                  onClick={() => Router.push("/auth/signin")}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
               >
                  Login
               </button>
            </div>
         )}
      </div>
   );
};

export default Header;
