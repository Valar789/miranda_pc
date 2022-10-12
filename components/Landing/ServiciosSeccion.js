import Image from "next/image";
import diagnostico from "public/diagnostico.jpg";
import reparacion2 from "public/reparacion2.jpg";
import pcveloz from "public/pcveloz.jpg";
import reparacion3 from "public/reparacion3.jpg";
import aplicaciones from "public/aplicaciones.jpg";
import instalacionhrd from "public/instalacionhardware.jpg";
import formatear from "public/formatear.jpg";
import operativos from "public/operativos.jpeg";
import actualizar from "public/actualizar.jpg";

export default function Servicios() {
  return (
    <section id="servicios" className="px-7 py-32 text-white m-auto w-full h-full ">
      <h1 className="text-center text-4xl font-bold  text-white  pb-10 m-auto">Servicios que ofrecemos</h1>

      <div className="flex flex-wrap justify-center gap-3 m-auto shadow-sm">
        <div className="card w-96 bg-white  shadow-xl ">
          <figure>
            <Image src={diagnostico} alt="Diagnostico" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 mb-5 ">Diagnostico!</h2>
            <p className="text-gray-900 ">
              El diagnostico de computadoras te permite evitar los molestos
              problemas tales como pantalla de inicio llena de errores,
              dificultad para conectarte a Internet, programas que no abren,
              computadora lenta por virus, etc.
            </p>
            <div className="card-actions justify-end ">
              <button className="btn btn-sm text-white  border-none bg-blue-900  my-4">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={reparacion2} alt="Mantenimiento Preventivo Hardware" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Mantenimiento Preventivo Hardware
            </h2>
            <p className="text-gray-900 ">
              El mantenimiento preventivo para hardware nos permite tomar
              acciones estratégicas para anticipar el deterioro de un PC o
              computador portátil. Esta práctica busca mantener los componentes
              en estado óptimo todo el tiempo para alargar su vida útil y evitar
              fallas en el sistema
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={pcveloz} alt="Mantenimiento Preventivo Software" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Mantenimiento Preventivo Software
            </h2>
            <p className="text-gray-900 ">
              El mantenimiento preventivo de software es el proceso por el cual
              se mejora y optimiza el software que se ha instalado, este
              mantenimiento se realiza para la prevención de posibles problemas
              que puedan llegar a surgir a medida que se utiliza el computador.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={reparacion3} alt="Reparación" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Reparación</h2>
            <p className="text-gray-900 ">
              La reparación de computadoras es un campo amplio que abarca muchas
              herramientas, técnicas y procedimientos utilizados para reparar
              problemas de hardware, software o redes / Internet.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={aplicaciones} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Instalación software</h2>
            <p className="text-gray-900 ">
              La instalación de los programas (software) es el proceso por el
              cual los nuevos programas son transferidos a un computador con el
              fin de ser configurados, y preparados para ser desarrollados.
              ejemplo office, antivirus, software de diseño
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={instalacionhrd} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Instalación de Hardware</h2>
            <p className="text-gray-900 ">
              Una instalación de hardware primero implica la instalación de
              controladores de dispositivos que se desencadenan conectando un
              nuevo dispositivo de hardware a un sistema ej. tarjetas de video,
              ram, ssd e.t.c.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={formatear} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Formatear</h2>
            <p className="text-gray-900 ">
              Significa “dar formato a un disco”, entonces este es el proceso
              para eliminar los datos que tiene el disco duro del PC. Formatear
              tu computadora es, básicamente, borrar absolutamente todo lo que
              contiene su medio de almacenamiento principal, incluyendo el
              propio sistema operativo.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={operativos} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Instalación Sistemas Operativos
            </h2>
            <p className="text-gray-900 ">
              Si acabas de montar/comprar tu Pc y quieres instalar o cambiar el
              sistema operativo podemos hacerlo por ti. eje. WIndows, linux
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-xl ">
          <figure>
            <Image src={actualizar} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Actualización</h2>
            <p className="text-gray-900 ">
              Mantente al dia con las ultimos parches de seguridad y novedades,
              actualiza tus programas o sistema operativo
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm text-white  border-none bg-blue-900 ">Solicitar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
