"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
   const router = useRouter();
    const [phonenumber, setPhonenumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
   
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/Contacts", {
      method: "POST",
      body: JSON.stringify({ email, name,phonenumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
    console.log(data);
    router.push("/login");
  };
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8">
            <div className="grid w-full gap-2">
              <form onSubmit={onSubmit}>
                <div>
                  <div className="relative">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="filled_success"
                      aria-describedby="filled_success_help"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-600 dark:border-blue-00 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Add Email
                    </label>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="relative">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="filled_success"
                      aria-describedby="filled_success_help"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-600 dark:border-blue-500 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Name of Recipient
                    </label>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="relative">
                    <input
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                      type="number"
                      id="filled_success"
                      aria-describedby="filled_success_help"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-blue-600 dark:border-blue-500 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Phone-Number
                    </label>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center mb-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-8000"
                  >
                    Add Contact
                  </button>
                  <p>
                    Do you have an account?{" "}
                    <Link href={pathname} className="text-blue-700 mx-3">
                      Close Modal{" "}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
