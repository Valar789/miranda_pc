import Link from "next/link";

export default function Asesoria() {
  return (
    <section
      id="ubicacion"
      className="bg-white px-7 py-32 text-white flex m-auto w-full h-full "
    >
      <div className="flex flex-wrap gap-4 text-gray-700 m-auto">
        <div className="w-full md:w-5/12 m-auto">
          <h1 className="text-4xl font-bold  text-blue-900">
            Donde nos ubicamos
          </h1>
          <p className="my-5">
            Somos una empresa de soporte técnico y mantenimiento de computadores
            en Miranda cauca.
          </p>
          <p>
            Ahora, ¿Tienes problemas con tu computador y no sabes dónde
            repararlo? No pierdas tiempo y dinero, solicita nuestro servicio
            técnico de reparación de computadores...
          </p>
          <Link href="#contacto">
            <a className="btn  border-none bg-blue-900 mt-8 text-white">
              Solicitar Asesoria
            </a>
          </Link>
        </div>
        <div className="flex flex-wrap gap-1 md:w-6/12 m-auto mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.1480412530304!2d-76.2300370812815!3d3.2600536569139966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbce4790df82e4489!2sTec.%20Luis%20Miguel%20z.!5e1!3m2!1ses!2sco!4v1665360088456!5m2!1ses!2sco"
            className="w-full h-96 rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
