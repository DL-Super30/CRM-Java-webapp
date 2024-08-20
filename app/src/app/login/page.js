// pages/login.js
import Head from 'next/head'

export default function Login() {
  return (
    <div className="flex items-center justify-start min-h-screen  bg-white 100">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Head>
      <div className="mt-1">
          {/* Image */}
          <img src="/image (1).png" alt="Logo" className="w-400 h-55 absolute left-5 top-5" /></div>
          <div className="flex items-center justify-center w-full md:w-auto">
          {/* Image */}
          <img src="background.png" alt="Logo" className="max-h-screen w-400 absolute right-8 top-0" /></div>
      <div className="w-full max-w-md p-8 space-y-8 ml-10 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-center">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-300 to-pink-500  w-full"
            >
              Sign in
            </button>
          </div>
          <p  className='justify-center ml-12'>&#169; All Rights are reserverd</p>
        </form>
      </div>
    </div>
  )
}
