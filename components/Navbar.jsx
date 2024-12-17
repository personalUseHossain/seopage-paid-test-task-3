"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6"; // Menu icon
import Image from "next/image";

import "@/styles/Navbar.css";

import NavLogo from "@/assets/NavbarLogo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="w-full text-white bg-black sticky top-0 left-0 z-20 px-3">
      <div className="mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Left links */}
          <Link href={'/'} className="flex items-center space-x-10 border-[1px] border-btnHoverLight p-2 rounded-lg logo-container">
            <div className="text-2xl font-bold logo">
              <Image
                src={NavLogo}
                alt="SeoPage1 Logo"
                height={150}
                width={150}
              />
            </div>
            <span className="text-lg beside-logo-text">
              Software Development
            </span>
          </Link>

          {/* Right links and menu button */}
          <Link
            href="/comming-soon"
            className="text-lg hover:bg-btnHoverLight p-2 rounded-lg middle-links"
          >
            Our Case Study
          </Link>
          <Link
            href="/comming-soon"
            className="text-lg hover:bg-btnHoverLight p-2 rounded-lg middle-links"
          >
            Service
          </Link>
          <Link
            href="/comming-soon"
            className="text-lg hover:bg-btnHoverLight p-2 rounded-lg px-4 middle-links"
          >
            Blog
          </Link>
          <div className="flex gap-4 items-center justify-center">
            <Link className="gradient-btn contact-btn" href="/comming-soon">
              Contact Us
            </Link>

            <div
              className="p-3 rounded-lg bg-light_dark flex justify-between items-center w-[13vw] gap-3 cursor-pointer max-w-[10rem]"
              onClick={toggleMenu}
            >
              <p>Menu</p>
              <FaBarsStaggered size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-light_dark rounded-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/comming-soon" className="text-lg">
              Our Case Study
            </Link>
            <Link href="/comming-soon" className="text-lg">
              Service
            </Link>
            <Link href="/comming-soon" className="text-lg">
              Blog
            </Link>
            <Link
              className="gradient-btn menu-contact-link"
              href="/comming-soon"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
