
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "mortgage-calculator" },
    { id: 4, link: "start" },
  ];

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Logo</Link>
        </h1>
        <ul className="hidden md:flex space-x-4">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link href={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 text-gray-300">
          {links.map(({ id, link }) => (
            <li key={id} className="py-2">
              <Link href={`/${link}`} onClick={() => setNavOpen(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

