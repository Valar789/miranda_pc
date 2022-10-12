import { useState } from "react";

export default function Contacto() {
  const [mensaje, setMensaje] = useState({
    name: "",
    email: "",
    message: "",
  });

  const captureValues = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const rawResponse = await fetch("https://formspree.io/f/moqbebvn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mensaje),
    });
    const content = await rawResponse.json();
    console.log(content);
  };

  return (
    <section
      id="contacto"
      className="bg-semitransparent px-7 py-32 text-white flex m-auto w-full h-full"
    >
      <div className="flex flex-wrap ">
        <div className="w-full md:w-4/12 mx-auto text-White m-auto">
          <h1 className="text-4xl font-bold  pb-4">

            Programa tu servicio técnico
          </h1>
          <p>
            No esperes hasta que tus computadores o portátiles dejen de
            funcionar. Asegura la continuidad de tu negocio. Solicita nuestros
            servicios expertos de consultoría informática y mantenimiento de
            computadores.
          </p>
          <p>
            Contáctanos ahora para que podamos asesorarte y darte el mejor
            servicio con un Precio Especial en este momento.  Escríbenos te contactaremos dentro las 24 horas hábiles.
          </p>
          <div className="my-4">

            <p className="text-lg font-semibold">Cel. 305 273 8798</p>
            <p className="text-lg font-semibold">Cel. 311 616 8833</p>
          </div>
        </div>
        <div className="w-full md:w-4/12 m-auto">
          <form className="bg-white text-gray-900 p-5 rounded-xl shadow-md">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-900 ">Nombre</span>
              </label>

              <input
                onChange={captureValues}
                name="name"
                type="text"
                placeholder="Escribe tu nombre"
                className="input bg-gray-300"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-900 ">Email</span>
              </label>

              <input
                onChange={captureValues}
                name="email"
                type="email"
                placeholder="Escribe tu correo"
                className="input bg-gray-300"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-900">Mensaje</span>
              </label>

              <textarea
                onChange={captureValues}
                name="message"
                className="textarea bg-gray-300"
                placeholder="Dejanos tu mensaje"
              ></textarea>
            </div>
            <div className="form-control">
              <button onClick={sendMessage} className="btn  border-none bg-blue-900 mt-4">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
