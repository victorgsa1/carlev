"use client";

import Image from "next/image";
import Logo from "../../../public/img/logocarlev.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleDoubleRight,
  FaMapPin,
  FaClock,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-gradient-to-b from-brand-300 to-brand-200`}>
      <div className="-translate-y-1/2 flex place-content-end overflow-x-hidden relative z-10">
        <div className="h-10 sm:h-12 bg-brand-200 -skew-x-[20deg] block w-4/5 rounded-md -mr-3 "></div>
      </div>
      <div className="row pb-5 px-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 md:col-span-1">
              <div className="max-w-[15rem] ">
                <Link
                  href="/"
                  className="cursor-pointer max-w-[8rem] md:max-w-[12rem]"
                >
                  <Image
                    src="/img/logo_white.png"
                    width={600}
                    height={204}
                    alt="Carlev Assistência Técnica Autorizada"
                  />
                  <Image
                    src="/img/snapon.png"
                    width={600}
                    height={204}
                    alt="Carlev Assistência Técnica Autorizada"
                  />
                </Link>
                <p className="text-white leading-5 mt-3 text-left">
                  Assistência técnica oficial e autorizada pela Sun Snapon
                  Brasil: o seu parceiro confiável para serviços especializados.
                </p>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 grid md:grid-cols-3 gap-5">
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl  ">Links Importantes</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/alinhadores">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Alinhadores
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/balanceadores">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Balanceadores
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/desmontadora">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Desmontadora
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/elevadores">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Elevadores
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/rampa">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Rampa
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/recicladores">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Recicladores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Contato</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="mailto:assistencia@carlev.net.br?subject=Olá vim do site, gostaria de um atendimento"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Atendimento via email
                    </a>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="https://api.whatsapp.com/send/?phone=5519997093646&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Atendimento via WhatsApp
                    </a>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="tel:11939510640"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Atendimento via telefone
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 mt-4 text-xl">
                  Horário de Funcionamento
                </h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaClock />
                      </span>
                      Segunda à Sexta das 8h às 17h
                    </p>
                  </li>
                </ul>
                <div className="flex gap-x-1 xl:gap-x-3 mt-5">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-100 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  {/* <a
                    href="https://br.linkedin.com/company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-100 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaLinkedinIn />
                  </a> */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-100 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5519997093646&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-100 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-100">
        <div className="container flex flex-wrap place-content-center gap-1 py-3">
          <div>
            <p className="text-white text-sm">
              © {data.getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="text-white flex gap-1 text-sm">
            Desenvolvido por
            <a
              href="https://interagiti.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 font-bold transition duration-500"
            >
              InteragiTI
            </a>
            &
            <a
              href="https://ominy.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 font-bold transition duration-500"
            >
              Ominy.
            </a>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
