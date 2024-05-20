import Header from "@/components/auth/Header";
import { userSession } from "@/serverActions/readUserSession";

const Dashboard = async () => {
   const user = await userSession();

   return (
      <div className="h-screen grid place-items-center">
         {user && <h1>Welcome {user.data.user?.email}</h1>}
         <Header />
      </div>
   );
};

export default Dashboard;
