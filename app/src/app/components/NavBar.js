
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <Image src="/menu (4).png" alt="Logo" width={20} height={20} />

          <Image src="/image (1).png" alt="Logo" width={160} height={40} />
          {/* <span className="text-black font-bold text-xl ml-2">Skill Capital</span> */}
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-black hover:text-pink-400">Home</a>
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={handleDropdownToggle}
              className="text-black hover:text-pink-400 focus:outline-none"
            >
              Services
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">NA</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">NA</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">NA</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-black hover:text-pink-400">Leads</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:text-pink-400">Oppurtunities</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:text-pink-400">Learners</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:text-pink-400">Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:text-pink-400">Activities</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:text-pink-400">Analytics</a>
            </Link>
          </li>
          <div className="flex items-center space-x-4">
          <Image src="/stars.png" alt="Logo" width={20} height={20} />

          <Image src="/bell (1).png" alt="Logo" width={20} height={20} />
          <Image src="/user (9).png" alt="Logo" width={20} height={20} />
          {/* <span className="text-black font-bold text-xl ml-2">Skill Capital</span> */}
        </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
