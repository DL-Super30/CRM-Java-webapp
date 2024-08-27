"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {

    const router = useRouter()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl)
    const token = sessionStorage.getItem('token');
    console.log(token)


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        let hasError = false;
        if (username === '') {
            setUsernameError('Please enter username');
            hasError = true;
        } else {
            setUsernameError('');
        }
        if (password === '') {
            setPasswordError('Please enter password');
            hasError = true;
        } else {
            setPasswordError('');
        }
        if (!hasError) {
            try {
                const response = await axios.post(`${apiUrl}/api/v1/auth/login`, {
                    "email" : username,
                    "password" : password
                });

                if (response.status === 200) {
                    router.push('/dashboard')
                    console.log(response.data);
                    
                }
            } catch (error) {
                
                    console.error('Error response:');
                    setLoginError('Invalid username or password');
                
            }
        }
    };


  return (
    <section className="h-screen flex flex-col bg-lamaPurple md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-2/3 max-w-md bg-white rounded-md py-16 px-8">
      
        <h1 className="text-2xl font-semibold text-center pb-10">Welcome Back</h1>
        <input
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full "
          type="text"
          id="username"
          placeholder="Email Address"
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <div style={{ color: '#E22449',fontSize:'15px' }}>{usernameError}</div>}
        <input
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full  mt-6"
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
         {passwordError && <div style={{ color: '#E22449',fontSize:'15px' }}>{passwordError}</div>}
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className=" w-full">
          <button
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
          {loginError && <div style={{ color: '#E22449', fontSize: '15px' }}>{loginError}</div>}
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-400 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
