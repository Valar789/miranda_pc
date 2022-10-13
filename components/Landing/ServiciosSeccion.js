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
      className="px-7 py-20 text-white m-auto w-full h-full "
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
              no abren, van lentos, Descríbenos, solícita tú diagnóstico para
              determinar la causa y brindarte la solución correspondiente etc.
            </p>

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
              Llevas más de 6 meses sin darle mantenimiento preventivo a tus
              equipos, tu equipo puede estar en riesgo, toma acciones
              estratégicas para mantener los componentes en estado óptimo todo
              el tiempo para alargar su vida útil y evitar fallas en el sistema.
            </p>

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
            Tus equipos tardan más tiempo al encender de lo que solía, los programas tardan en abrir, han perdido rendimiento, solicita este mantenimiento para la corrección y prevención de posibles problemas que puedan llegar a surgir a medida que se utiliza el computador.
            </p>

          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={reparacion3} alt="Reparación" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Reparación</h2>
            <p className="text-gray-900 ">
            Solicita el diagnóstico y reparación de tu equipo, podemos reparar problemas de hardware, software o redes / Internet.
            </p>
   
          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={aplicaciones} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Instalación software</h2>
            <p className="text-gray-900 ">
            Tus programas habituales dejaron de funcionar, tienes problemas de activación o deseas instalar un software o aplicación solicita nuestra asesoría.
            </p>

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
            Algún componente de tu equipo dejo de funcionar quieres remplazarlo o simplemente quieres mejorar el rendimiento de este y no sabes como, te podemos ayudar.
            </p>

          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={formatear} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Formateo</h2>
            <p className="text-gray-900 ">
            Quieres formatear la unidad de almacenamiento de tu equipo, con o sin respaldo de información y reinstalarle el sistema operativo.
            </p>

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
            Si tienes un PC nuevo y desea instalar un sistema operativo Windows/Linux o quieres cambiar el que tienes y tu equipo cuenta con los requerimientos necesarios, agenda tu cita.
            </p>

          </div>
        </div>
        <div className="card sm-w-12/12 md:w-12/12 lg:w-3/12 bg-white shadow-xl ">
          <figure>
            <Image src={actualizar} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-900 ">Actualización</h2>
            <p className="text-gray-900 ">
            Mantente al día con las últimos parches de seguridad y novedades, actualiza tu software, aplicaciones o sistema operativo.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
