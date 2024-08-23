"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const apiUrl = process.env.NEXT_PUBLC_API_URL;

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/api/v1/auth/sign-up`, user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 1 && user.password.length > 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-2">
      <h1>{loading ? "Processing" : "Signup"} </h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border-gray-300 rouned-lg mb-4 focus:outline-none focus:border-gray-600 "
        id="email"
        value={user.email}
        type="text"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={user.password}
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <label htmlFor="email">Role</label>
      <input
        id="role"
        value={user.role}
        type="text"
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      />
    </div>
  );
};

export default SignupPage;
