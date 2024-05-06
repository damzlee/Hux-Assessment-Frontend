"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import Modal from "../componenets/Modal";
import { useEffect } from "react";

export default function contact() {
  const [contactsinfo, setcontactinfo] = useState([]);
  useEffect(() => {
    const getContacts = () => {
      fetch("http://localhost:3000/api/Contacts")
        .then((query) => query.json())
        .then((response) => {
          setcontactinfo(response.data);
        });
    };

    getContacts();
  }, []);

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-blue-800">Hux-Asessment-contact-App</h1>
        <Link
          href="?modal=true"
          className="text-blue-700 rounded-full
               hover:text-white border border-blue-700 hover:bg-white
               focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
               rounded-full text-sm px-6 py-3.5 text-center me-2 mb-2 dark:border-blue-500
                dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500
                 dark:focus:ring-blue-800 mx-3"
        >
          Add Contact
        </Link>
      </header>
      <Suspense fallback={<>Loading...</>}>
        <Modal />
      </Suspense>
      <ul className="pl-4 max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {contactsinfo &&
          contactsinfo.length &&
          contactsinfo.map((contact: any) => {
            return (
              <>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {contact.email}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {contact.phonenumber}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                      </svg>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}
