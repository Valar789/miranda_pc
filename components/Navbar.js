import Link from "next/link";
import { useEffect, useRef } from "react";
import logo from 'public/logo2.png'
import Image from "next/image";

export default function NavBar() {
  const refnav = useRef()
 

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')

      const { y } = header.getBoundingClientRect();

      y !== 0
        ? refnav.current.classList.add("setNavBar")
        : refnav.current.classList.remove("setNavBar");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
    ref={refnav}
      id="topNavBar"
      className="navbar float text-white bg-slate-900 fixed top-0 z-50"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#about">
                <a>Acerca de nosotros</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="#servicios">
                <a className="justify-between">
                  Servicios
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </Link>
              <ul className="p-2 bg-gray-800">
                <li>
                  <a>Servicio 1</a>
                </li>
                <li>
                  <a>Servicio 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#ubicacion">
                <a>Ubicacion</a>
              </Link>
            </li>
            <li>
              <Link href="#contacto">
                <a>Contacto</a>
              </Link>
            </li>
            <li>
              <a>Asistencia en linea</a>
            </li>
          </ul>
        </div>
        <Link href="#header">
          
          <a className="btn btn-ghost normal-case text-xl"><Image height={55} width={200} src={logo} alt='logo'/></a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li>
            <Link href="#asesoria">
              <a>Asesoria</a>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link href="#servicios">
              <a>
                Servicios
                {/* <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg> */}
              </a>
            </Link>
            {/* <ul className="p-2 bg-gray-800">
              <li>
                <a>Servicio 1</a>
              </li>
              <li>
                <a>Servicio 2</a>
              </li>
            </ul> */}
          </li>
          <li>
            <Link href="#ubicacion">
              <a>Ubicacion</a>
            </Link>
          </li>
          <li>
            <Link href="#contacto">
              <a>Contacto</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>Acerca de nosotros</a>
            </Link>
          </li>
        </ul>
      </div>
      <div id='asistencia' className="navbar-end mr-4">
        <Link href='#contacto'><a className="btn btn-sm border-none bg-blue-900 text-white">Agenta tu Cita</a></Link>
      </div>
    </div>
  );
}
