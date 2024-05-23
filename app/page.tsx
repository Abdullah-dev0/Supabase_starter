import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const HomePage = async () => {
   return (
      <div className="h-screen grid place-items-center gap-5">
         <h1>Home Page</h1>
         <Link href="/auth/signin">
            <Button>Sign in</Button>
         </Link>
      </div>
   );
};

export default HomePage;
