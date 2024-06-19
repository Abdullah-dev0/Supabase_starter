//proteced route

import Header from "@/components/auth/Header";
import { getUserFromDatabase, userSession } from "@/serverActions/getUser";

const Dashboard = async () => {
  const userdata = await userSession();
  //we get user from the database because we need some extra data of the user
  const user = await getUserFromDatabase(userdata?.data.user?.id);

  return (
    <div className="mt-8 flex flex-col justify-center bg-white rounded-lg shadow-md w-full max-w-md mx-auto" >
      <Header />
      <div className="p-6">
        {user ? (
          <>
            <h1 className="text-2xl font-bold mb-4">User Information</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Name</h2>
                <p className="mt-1 text-lg font-semibold text-gray-800">{user.data?.display_name}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Email</h2>
                <p className="mt-1 text-lg font-semibold text-gray-800">{user.data?.email}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">user id</h2>
                <p className="mt-1 text-lg font-semibold text-gray-800">{user.data?.id}</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Loading user information...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
