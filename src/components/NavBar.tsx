"use client";

import { Button } from "./ui/button";
import SnowFall from "./ui/Snow/Snowfall";
import logo from "../../public/assets/Feastables_Logo.avif";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import USFlag from "../../public/assets/Flag-United-States-of-America.avif";
import { regionLanguage } from "@/utils/links";

import { GrLocation } from "react-icons/gr";
import CartDrawer from "./CartDrawer";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  function handleOpenMobileNav() {
    setOpenMobileNav(true);
  }
  function handleCloseMobileNav() {
    setOpenMobileNav(false);
  }

  return (
    <>
      <header className="relative overflow-hidden px-4 py-1 border-b-[4px] border-black bg-primary">
        <SnowFall count={50} />
        <div className="flex gap-4 justify-between items-center">
          {!openMobileNav ? (
            <div className="block lg:hidden" onClick={handleOpenMobileNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>
          ) : (
            <div className="block lg:hidden" onClick={handleCloseMobileNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          )}
          <div className="flex items-center gap-16">
            <div className="relative z-50">
              <Image
                src={logo}
                width={150}
                height={150}
                alt="Feastables Logo"
                className="object-cover w-full h-full align-middle"
              />
            </div>
            <nav className="flex items-center gap-10">
              <Button className="hidden lg:block bg-transparent italic font-extrabold text-lg text-black uppercase hover:font-[900]">
                Shop
              </Button>

              <Link
                href={"/"}
                className="hidden lg:block italic font-extrabold text-lg text-black uppercase"
              >
                Ethical Sourcing Commitment
              </Link>
            </nav>
          </div>

          <div>
            <ul className="flex items-center gap-3 justify-center">
              <li className="hidden lg:block">
                <DropdownMenu>
                  <DropdownMenuTrigger className="rounded-full ">
                    <div className="w-8 h-8 rounded-full border-2 border-black hover:shadow-shadow_2xl shadow-black">
                      <Image
                        src={USFlag}
                        alt="US flag"
                        width={100}
                        height={100}
                        className="w-full rounded-full h-full object-cover"
                      />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="border-2 border-black rounded-none p-0 bg-primary
                         text-black font-extrabold italic uppercase"
                  >
                    {regionLanguage.map((item, index) => {
                      return (
                        <DropdownMenuItem
                          key={index}
                          className="flex items-center justify-between p-4 focus:bg-black focus:text-white rounded-none cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div>
                              <Image
                                src={item.flag}
                                width={100}
                                height={100}
                                alt={`${item.country} flag`}
                                className="w-8 aspect-video"
                              />
                            </div>
                            <div>
                              <h2 className="">{item.country}</h2>
                            </div>
                          </div>
                          <div>
                            <p>{item.currency}</p>
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="hidden lg:block">
                <div className="flex justify-center items-center w-8 h-8 mb-1 rounded-full border-2 border-black hover:shadow-shadow_2xl shadow-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smile rounded-full w-8 h-8 "
                  >
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" width={100} />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </div>
              </li>

              <li className="hidden lg:block">
                <div className="w-8 h-8 mb-1 flex justify-center items-center border-2 border-black hover:shadow-shadow_2xl shadow-black aspect-square rounded-full">
                  <GrLocation size={22} />
                </div>
              </li>

              <li className="cursor-pointer relative">
                <CartDrawer />
              </li>
            </ul>
          </div>
        </div>
      </header>

      {openMobileNav && <MobileNav />}
    </>
  );
}
