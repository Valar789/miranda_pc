import Image from "next/image";
import Link from "next/link";
import whatsapp from "public/whatsapp.png";


export default function WhatsApp() {


  return (
    <div  className="inUp hover:scale-110 fixed bottom-4 right-4 arrowDisplay z-30 flex flex-col text-center ">

      <Link href="https://wa.me/message/NU6LKHZRJY4UL1" >
        <a target="_blank">
         
          <Image width={50} height={50} src={whatsapp} alt="up" />
        </a>
      </Link>
    </div>
  );
}
