import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image src="/finallogo.png" width={100} height={100} alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Highlights
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#service" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="https://www.instagram.com/switchfixx_electricals/profilecard/?igsh=MXIwZTUwaXJ1Z2tqbg=="
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Switchfixx Electricals
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
