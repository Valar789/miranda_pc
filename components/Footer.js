import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative  border-none backdrop-blur-sm bg-slate-900/60 text-white  pb-6">
        <div className="flex justify-center flex-col w-full m-auto px-4">
          <div className="flex flex-col items-center m-auto pt-6">
            <p className="">Soluciones Informáticas</p>
   <a href='https://localhostweb.vercel.app/' className="m-y2">LocalHost</a>      
          </div>
          <hr className="my-6 border-gray-300" />

            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  font-medium py-1">
                Copyright © {new Date().getFullYear()} LocalHost.{" "}
              </div>
            </div>

        </div>
      </footer>
    </>
  );
}
