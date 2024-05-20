"use client";

import { login } from "@/server/auth.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthProviders from "./AuthProviders";

const LoginFOrm = () => {
   const Router = useRouter();
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [error, setError] = useState<string | undefined>("");
   const [success, setSuccess] = useState<string | undefined>("");
   return (
      <div>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               setError("");
               setSuccess("");
               login(formData).then((res) => {
                  if (res?.success) {
                     Router.push("/dashboard");
                  }
                  setError(res?.error);
               });
            }}
         >
            <label htmlFor="email">Email:</label>
            <input
               id="email"
               name="email"
               type="email"
               value={formData.email}
               required
               onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
               }
            />
            <label htmlFor="password">Password:</label>
            <input
               id="password"
               name="password"
               type="password"
               required
               value={formData.password}
               onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
               }
            />
            <button>Login</button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
         </form>

         <AuthProviders />
      </div>
   );
};

export default LoginFOrm;
