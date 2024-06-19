"use client";
import { createBroswerClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const Header = () => {
  const Router = useRouter();
  const [isPending, startTransition] = useTransition();
  const supabase = createBroswerClient();

  const logout = async () => {
    startTransition(async () => {
      const { error } = await supabase.auth.signOut();
      if (!error) Router.push("/");
    });
  };

  return (
    <div>
      <div className="flex gap-5 w-full items-center justify-center rounded-xl bg-gray-800 p-4">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        <button onClick={logout} disabled={isPending} className="bg-red-500 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
