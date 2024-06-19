import { Button } from "@/components/ui/button";
import { userSession } from "@/serverActions/getUser";
import Link from "next/link";

const HomePage = async () => {
  const { data } = await userSession();
  return (
    <div className="h-screen grid place-items-center gap-5">
      <h1>Home Page</h1>
      {data.user ? (
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      ) : (
        <Link href="/auth/signin">
          <Button>Sign in</Button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
