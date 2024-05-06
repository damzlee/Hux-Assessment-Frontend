"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Page() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/Users/login", {
      method: "POST",
      body: JSON.stringify({ Username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
    console.log(data);
    if (res.ok) {
      router.replace("/contacts");
    }
  };
  
  return (
    <div
      className="h-screen flex flex-col  
                    items-center justify-center"
    >
      <p className="text-blue-700 text-xl mb-3">Hux-Assesment-Login-Form</p>
      <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]  ">
        <div className="grid w-full gap-2">
          <div>
            <div className="relative">
              <input
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                id="filled_success"
                aria-describedby="filled_success_help"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-600 dark:border-blue-00 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                UserName
              </label>
            </div>
          </div>
          <div className="pt-7">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="filled_success"
                aria-describedby="filled_success_help"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-600 dark:border-blue-500 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Password
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center mb-4">
            <button
              type="button"
              className="focus:outline-none text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-8000"
            >
              Login
            </button>
            <p>
              Do you have an account?{" "}
              <Link href={"/signup"} className="text-blue-700 mx-3">
                signup{" "}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
