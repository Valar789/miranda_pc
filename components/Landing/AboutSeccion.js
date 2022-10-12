import Image from "next/image";
import imageAbout from "public/aboutTeam.jpg";

export default function About() {
  return (
    <section id="about" className="bg-white px-7 py-32 text-white flex m-auto w-full h-full ">
 
      <div className="flex flex-wrap text-gray-700">
        <div className="w-full md:w-4/12 m-auto  text-center">
          <h1 className="text-4xl font-bold text-blue-900  pb-4">Quienes somos</h1>
          <p>
            Somos una empresa de soporte técnico y mantenimiento de computadores
            en Miranda cauca. Contamos con una amplia experiencia de más de 10 años, que
            nos permite optimizar los procesos para dar soluciones efectivas y
            garantizadas a nuestros clientes.
          </p>
        </div>
        <div className="w-full md:w-5/12 m-auto">
          <Image src={imageAbout} alt="Sobre nosotros" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
