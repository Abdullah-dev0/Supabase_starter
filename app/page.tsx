import Header from "@/components/auth/Header";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const HomePage = async () => {
   const supabase = await createClient();

   const { data } = await supabase.auth.getSession();
   console.log(data.session?.user);
   return (
      <div>
         <h1>Home Page</h1>
         {data ? (
            <Link href="/profile">
               <p>Profile</p>
            </Link>
         ) : (
            <Link href="/login">
               <p>Login</p>
            </Link>
         )}
         <Header />
      </div>
   );
};

export default HomePage;
