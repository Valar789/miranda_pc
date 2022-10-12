import Image from "next/image";

import instalacionhardware from "public/instalacionhardware.jpg";

import Link from "next/link";

export default function Asesoria() {
  return (
    <section
      id="asesoria"
      className="bg-white px-7 py-32 text-white flex m-auto w-full h-full "
    >

      <div className="boxImagen flex flex-wrap text-gray-700 m-auto">
        <div className="md:w-6/12 m-auto">
          <Image

            className="efectZoom rounded-xl"
            src={instalacionhardware}
            alt="hardware"
          />

        </div>
        <div className="md:w-5/12 m-auto">
          <h1 className="text-4xl font-bold  text-blue-900">
            No pierdas tiempo y dinero
          </h1>
          <p className="my-5">
            Sobre todo, ten tus dispositivos funcionando al 100% con nuestro
            servicio de soporte técnico remoto y mantenimiento de computadores.
          </p>
          <p>
            Ahora, ¿Tienes problemas con tu computador y no sabes dónde
            repararlo? No pierdas tiempo y dinero, solicita nuestro servicio
            técnico de reparación de computadores...
          </p>
          <Link href="#contacto">
            <a className="btn border-none bg-blue-900 mt-8 text-white">
              Solicitar Asesoria
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
