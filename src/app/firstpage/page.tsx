"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Firstpage() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Link
            href={"/login"}
            className="px-6 py-3.5 text-base font-medium text-white
               bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300 rounded-full text-center dark:bg-blue-600
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className="text-blue-700 rounded-full
               hover:text-white border border-blue-700 hover:bg-white
               focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
               rounded-full text-sm px-6 py-3.5 text-center me-2 mb-2 dark:border-blue-500
                dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                 dark:focus:ring-blue-800 mx-3"
          >
            Signup
          </Link>
        </div>
      </div>

      <div className=" relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-6xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex-col">
          <div>
            <p className="font-bold text-lg font-sans">
              Hux-Assessment-Contact-App
            </p>
          </div>
          <div className="mt-6">
            <button
              className="text-blue-700 rounded-full
               hover:text-white border border-blue-700 hover:bg-white
               focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
               rounded-full text-sm px-6 py-3.5 text-center me-2 mb-2 dark:border-blue-500
                dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                 dark:focus:ring-blue-800 mx-3"
            >
              Here is a Contact test application
            </button>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
