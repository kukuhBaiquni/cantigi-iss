/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Socmed from "./socmed";
import Modal from "./modal";

const link = ["Home", "Data Sensus", "Visi Misi"];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onOpen = ():void => {
    setIsVisible(true);
  };

  return (
    <div>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)} />
      <Socmed />
      <nav className="w-full py-[14px] pl-[52px] pr-[65px] flex items-center">
        <Image
          alt="logo"
          className="object-cover"
          height={60}
          src="/images/logo.png"
          width={220}
        />
        <button
          className={clsx(
            "py-[9px] px-[16px] text-lg border-2 ml-[80px] text-blue-600 font-bold border-blue-600",
            "hover:bg-hover-color transition-all duration-300",
            "hover:border-hover-color hover:text-white",
          )}
          type="button"
        >
          Report an Issues
        </button>
        <div className="w-[300px] flex justify-between items-center text-lg ml-auto">
          {link.map((item) => (
            <Link href="#" key={item}>
              <a className="hover:text-red-500">{item}</a>
            </Link>

          ))}
          <button type="button" onClick={onOpen}>
            <i className="bx bx-search text-2xl mt-2" />
          </button>
        </div>
      </nav>

    </div>
  );
}
