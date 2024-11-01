import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const logoImage = "/assets/logos/logo-rifqi-top-up.svg";
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D9D9D9] text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-32 grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-20">
        <div className="md:col-span-2">
          <div className="flex flex-row items-center gap-3">
            <Image
              src={logoImage}
              alt="RifqiTopUp Logo"
              width={50}
              height={50}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-[#285CC4]">
              Rifqi
              <span className="text-[#FBB017]"> Top Up</span>
            </h3>
          </div>

          <p className="text-sm text-justify text-black">
            Rifqitopup is the ideal website for gamers looking to top up their
            accounts at affordable and reliable prices. We are trusted as the
            fastest and most responsive top-up provider in Indonesia. We offer
            various secure payment methods, including bank transfers, virtual
            bank accounts, e-wallets, and QR scanning, making transactions
            convenient and safe. Additionally, our customer service team is
            available 24/7 to assist you whenever needed.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-red-500 mb-4">Sitemap</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-red-400 text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-red-400 text-black">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-red-400 text-black">
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/transaction-check"
                className="hover:text-red-400 text-black"
              >
                Transaction Check
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/6285175999728?text=Halo,%20admin%20saya%20membutuhkan%20bantuan"
                className="hover:text-red-400 text-black"
                target="_blank"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-red-500 mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/create-ticket"
                className="text-black hover:text-red-400"
              >
                Create Ticket
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-red-500 mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-red-400 text-black"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-red-400 text-black"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-32 mt-8 flex space-x-4 text-2xl">
        <Link
          href="https://instagram.com/rifqi.setiawan18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-400"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://wa.me/6285175999728?text=Halo,%20admin%20saya%20membutuhkan%20bantuan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-green-500"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href="mailto:rfqtopup@gmail.com"
          className="text-black hover:text-blue-500"
          rel="noopener noreferrer"
        >
          <MdOutlineEmail />
        </Link>
      </div>

      <div className="mt-8 text-center text-sm text-black">
        <div className="px-4 md:px-32 max-w-screen-lg mx-auto border-t border-[#989898] pt-4">
          © {getYear} RIFQITOPUP All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;