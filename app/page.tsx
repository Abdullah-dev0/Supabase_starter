import Link from "next/link";

const HomePage = async () => {
   return (
      <div>
         <h1>Home Page</h1>
         <Link href="/auth/signin">
            <p>login</p>
         </Link>
      </div>
   );
};

export default HomePage;
