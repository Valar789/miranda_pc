import Image from "next/image";
import Link from "next/link";
import reparacion1 from "public/reparacion1.jpg";
export default function Header() {
  return (
    <section
      id="header"
      className="bg-white px-7 py-32 text-white flex m-auto w-full h-full "
    >
      <div className=" flex flex-wrap m-auto">
        <div className="box1 w-full md:w-4/12 m-auto ">
          <p className="text-cyan-600 text-lg">Mejora tu productividad</p>
          <h1 className="qtitle text-5xl font-bold pb-3 text-blue-900">
            MirandaPC
          </h1>
          <p className="text-xl text-slate-900 my-4">
            Ofrecemos servicios de consultoría informática y mantenimiento de
            computadores que se adaptan a tus necesidades. Nuestro compromiso
            contigo es ayudarte a tener tus dispositivos funcionando y que seas
            100% productivo.
          </p>
          <Link href="#about">
            <a className="btn border-none bg-blue-900  my-4 text-white">Sobre nosotros</a>
          </Link>
        </div>
        <div className="boxImagen md:w-6/12 m-auto">
   
          <Image
            src={reparacion1}
            alt="Sobre nosotros"
            className="efectZoom rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
