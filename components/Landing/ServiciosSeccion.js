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
import Link from "next/link";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="px-7 py-32 text-white m-auto w-full h-full "
    >

      <div className="flex flex-wrap justify-center gap-3 m-auto shadow-sm">
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white  shadow-xl ">
          <figure>
            <Image src={diagnostico} alt="Diagnostico" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900">Diagnostico!</h2>
            <p className="text-gray-900 ">
              Tus equipos tienen problemas tales como pantalla de inicio llena
              de errores, anuncios molestos, demora al encender, apagones
              repentinos, dificultad para conectarse a Internet, programas que
              no abren, van lentos, Escribenos, solicita tu diagnostico para
              determinar la causa y brindarte la solucion correspondiente etc.
            </p>
            <div className="card-actions justify-end ">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={reparacion2} alt="Mantenimiento Preventivo Hardware" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Mantenimiento Preventivo Hardware
            </h2>
            <p className="text-gray-900 ">
              llevas mas de 6 meses sin darle mantenimiento preventivo a tus
              equipos, tu equipo puede estar en riesgo, toma acciones
              estratégicas para mantener los componentes en estado óptimo todo
              el tiempo para alargar su vida útil y evitar fallas en el sistema.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12   bg-white shadow-xl ">
          <figure>
            <Image src={pcveloz} alt="Mantenimiento Preventivo Software" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Mantenimiento Preventivo Software
            </h2>
            <p className="text-gray-900 ">
              Tus equipos tardan mas tiempo al encender de lo que solia, los
              programas tardan en abrir, han perdido rendimiento, solicita este
              mantenimiento para la correccion y prevención de posibles
              problemas que puedan llegar a surgir a medida que se utiliza el
              computador.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={reparacion3} alt="Reparación" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Reparación</h2>
            <p className="text-gray-900 ">
              Solicita el dignostico y reparacion de tu equipo, podemos reparar
              problemas de hardware, software o redes / Internet.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={aplicaciones} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Instalación software</h2>
            <p className="text-gray-900 ">
              Tus programas habituales dejaron de funcionar, tienes problemas de
              activacion o deseas instalar un software o aplicacion solicita
              nuestra acesoria.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={instalacionhrd} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Instalación de Hardware
            </h2>
            <p className="text-gray-900 ">
              Algun componente de tu equipo dejo de funcionar quieres
              remplazarlo o simplemente quieres mejorar el rendimiento de este y
              no sabes como, te podemos ayudar.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={formatear} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Formateo</h2>
            <p className="text-gray-900 ">
              Quieres formatear la unidad de almacenamiento de tu equipo, con o
              sin respaldo de informacion y reinstalarle el sistema operativo.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={operativos} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">
              Instalación Sistemas Operativos
            </h2>
            <p className="text-gray-900 ">
              Si tienes un pc nuevo y desea instalar un sistema operativo
              windows/linux o quieres cambiar el que tienes y tu equipo cuenta
              con lo requerimientos necesarios, agenda tu cita.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={actualizar} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Actualización</h2>
            <p className="text-gray-900 ">
              Mantente al dia con las ultimos parches de seguridad y novedades,
              actualiza tu software, aplicaciones o sistema operativo.
            </p>
            <div className="card-actions justify-end">
              <Link href="#contacto">
                <a className="btn btn-sm text-white  border-none bg-blue-900 ">
                  Solicitar
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
