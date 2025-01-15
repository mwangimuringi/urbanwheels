import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col text-black mt-5 border-t bg-gray-100">
      <section className="flex flex-col lg:flex-row justify-between gap-8 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt={"Kenya Wheels company logo"}
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Kenya Wheels {currentYear}
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <nav className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10 border-t border-gray-100 sm:px-16 px-6 py-6">
        <p>@{currentYear} Kenya Wheels. All rights reserved</p>

        <nav className="footer__copyrights-link flex gap-4">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
