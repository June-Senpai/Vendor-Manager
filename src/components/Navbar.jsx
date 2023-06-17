"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Navbar({ session }) {
  const [navbar, setNavbar] = useState(false);
  // console.log({ session });
  return (
    <div>
      <nav className="w-full bg-black z-10 shadow-md shadow-blue-500/50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">Home</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/create" onClick={() => setNavbar(!navbar)}>
                    Create
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  {session ? (
                    <div className="flex items-center gap-2 ">
                      <Image
                        className=" rounded-full "
                        width={30}
                        height={30}
                        src={session?.user?.image}
                        alt="user-Image"
                      />
                      <h3>{session?.user?.name} </h3>
                      <button onClick={() => signOut()}>
                        <Image
                          src="/logout.png"
                          width={25}
                          height={25}
                          alt="logout"
                        />
                      </button>
                    </div>
                  ) : (
                    <Link href="/login" onClick={() => setNavbar(!navbar)}>
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <div className="">
    //   <Link href="/">Home</Link>
    //   <Link href="/create">Create</Link>
    //   <Link href="/login">Login</Link>
    // </div>
  );
}
