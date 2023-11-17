"use client";

import React, { Fragment, useEffect, useState } from "react";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedinIn,
  FaAngleDown,
  FaChevronDown,
  FaCarBattery,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logocarlev.png";
import navigation from "./navigation";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Cart from "../common/Cart/Cart";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

declare const window: any;
const servicos = [
  { name: "Crossdocking", href: "/crossdocking" },
  { name: "Armazenamento e Gestão de Estoque", href: "/armazenamento-estoque" },
  { name: "Carga Fracionada", href: "/carga-fracionada" },
  { name: "Carga Lotação", href: "/carga-lotacao" },
  { name: "Carga Produtos Químicos", href: "/carga-produtos-quimicos" },
];

export default function Header() {
  const [cart, setCart] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const data = {
    logoAlt: "Carlev",
    redeSocial: {
      facebook: "https://www.facebook.com/",
      linkedIn: "https://br.linkedin.com/company/",
      instagram: "https://www.instagram.com/",
      whatsapp:
        "https://api.whatsapp.com/send/?phone=5519991460273&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento&type=phone_number&app_absent=0",
    },
    contato: {
      phone: "(11) 97667-7390",
    },
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header>
        <a
          href="https://api.whatsapp.com/send/?phone=5519991460273&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 text-white text-3xl shadow-xl bg-[#25D366] p-3 rounded-full z-30"
        >
          <FaWhatsapp />
        </a>
        <div className="bg-brand-100 md:px-5 z-20 font-light border-b border-white/20 relative text-white ">
          <div className="max-w-7xl mx-auto flex place-content-between">
            <div className="flex place-items-center gap-x-5">
              <a
                href="mailto:interagiti@interagiti.com?subject=Olá vim do site, gostaria de um atendimento personalizado"
                className="text-sm hidden sm:block"
              >
                <span className="inline-block text-lg -mb-1 mx-2">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                email@email.com
              </a>
              <a
                href={data.redeSocial.whatsapp}
                target="_blank"
                className="text-sm"
                rel="noopener noreferrer"
              >
                <span className="inline-block -mb-[2px] mx-2">
                  <FaPhoneAlt></FaPhoneAlt>
                </span>
                <strong>(11) </strong>
              </a>
            </div>

            <div className="flex">
              <a
                href={data.redeSocial.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href={data.redeSocial.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaInstagram />
              </a>
              <a
                href={data.redeSocial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <nav
          className={
            navbar
              ? "bg-white shadow-lg fixed w-full z-50 px-5 top-0 animate-slideInDown"
              : "bg-white shadow-lg fixed w-full z-50 pr-5 "
          }
        >
          <div className="row">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 max-w-[240px] md:max-w-[300px]">
                  <Link href="/" className="cursor-pointer">
                    <Image
                      src={Logo}
                      width={600}
                      height={189}
                      className="cursor-pointer p-4"
                      title={data.logoAlt}
                      alt={data.logoAlt}
                    />
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className=" flex items-center space-x-4 font-medium">
                    {navigation.map((item) =>
                      item.name == "Serviços" ? (
                        <>
                          <div key={item.href} className="relative text-right">
                            <div className="group relative">
                              <Link
                                key={item.name}
                                href={`${item.href}`}
                                className="cursor-pointer tracking-wider px-3 py-7 font-medium group-hover:text-brand-200 text-brand-100 transition duration-500 relative"
                              >
                                {item.name}
                                <span className="inline-block -mb-1">
                                  <FaAngleDown
                                    className="ml-2 -mr-1 h-5 w-5 text-sm opacity-75 text-brand-100 group-hover:text-brand-200 transition duration-500"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Link>
                              <div className="group-hover:absolute hidden group-hover:block bg-white shadow-md p-[2px] w-48 top-12">
                                {servicos.map((item, i) => (
                                  <div key={i}>
                                    <Link
                                      href={`/servicos/${item.href}`}
                                      className="hover:bg-brand-100 hover:text-white text-brand-100 group text-start flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          key={item.name}
                          href={`${item.href}`}
                          className="cursor-pointer tracking-wider px-3 py-7 font-medium hover:text-brand-200 text-brand-100"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                    <Link
                      href="/cotacao"
                      className="bg-brand-100 font-medium rounded-md py-3 px-5 text-white"
                    >
                      Cotação
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" flex lg:hidden ">
                <button
                  className="text-brand-200 px-4 text-xl"
                  onClick={toggleCart}
                >
                  <FiShoppingCart />
                </button>
                <Cart
                  isOpen={isCartOpen}
                  onClose={toggleCart}
                  cart={cart}
                  updateCart={updateCart}
                />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-brand-100 bg-brand-400 outline-none shadow-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-zinc-100 -mx-5 px-2 space-y-1 sm:px-3 py-10"
                >
                  <div>
                    {navigation.map((item) =>
                      item.name == "Serviços" ? (
                        <div key={item.href} className="relative text-right">
                          <Menu as="div" className="">
                            <Menu.Button className="cursor-pointer text-brand-100 block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                              Serviços
                              <span className="inline-block -mb-1 text-brand-100/70">
                                <FaAngleDown />
                              </span>
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="ml-5 mb-2 origin-top-right divide-y ">
                                <div className="px-1 pb-1 ">
                                  {servicos.map((item, i) => (
                                    <Menu.Item key={i}>
                                      {({ active }) => (
                                        <Link
                                          href={`/servicos/${item.href}`}
                                          onClick={() => setIsOpen(false)}
                                          className={`${
                                            active
                                              ? "bg-brand-100 text-white"
                                              : "text-brand-100"
                                          } group text-start flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                          {item.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="cursor-pointer text-brand-100 block px-3 py-2 rounded-md text-base font-medium tracking-wider"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                    <div className="mt-3 ml-3">
                      <Link
                        href="/cotacao"
                        onClick={() => setIsOpen(false)}
                        className="bg-brand-100 font-medium rounded-md py-3 px-5 text-white"
                      >
                        Cotação
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}
