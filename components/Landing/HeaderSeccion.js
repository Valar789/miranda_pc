import Image from "next/image";
import Link from "next/link";
import imgHeader from "public/imgHeader.png";

export default function Header() {
  return (
    <section
      id="header"
      className="bg-white px-7 pt-32 text-white flex m-auto w-full h-full "
    >
      <div className="flex flex-wrap justify-between gap-5 m-auto">
        <div className="inLeft box1 w-full sm:w-12/12 md:w-10/12 lg:w-4/12 m-auto ">
          <p className="text-cyan-600 text-lg">Mejora tu productividad</p>
          <h1 className="qtitle flex text-5xl font-bold pb-3 text-slate-900">
            Miranda<div className="text-blue-400 font-bold">PC</div>
          </h1>
          <p className="text-lg text-slate-900 my-4">
            Ofrecemos servicios de consultoría informática y mantenimiento de
            computadores que se adaptan a tus necesidades. Nuestro compromiso
            contigo es ayudarte a tener tus dispositivos funcionando y que seas
            100% productivo.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="#about">
              <a className="py-2 px-3 border-none rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-900  my-2 text-white">
                Sobre nosotros
              </a>
            </Link>
            <Link href="#about">
              <a className="py-2 px-3 border-none rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-900  my-2 text-white">
                Nuestros Servicios
              </a>
            </Link>
          </div>
        </div>
        <div className="sm:w-12/12 md:w-10/12 lg:w-6/12 m-auto">
          <Image
            src={imgHeader}
            alt="Sobre nosotros"
            className="inShake rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
