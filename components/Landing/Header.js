import { Carousel } from "flowbite-react";
export default function Header() {
  return (
    <section id="header" className="relative h-screen bg-black">
      <div className="sm:h-100 xl:h-100 2xl:h-100 h-screen">
        <Carousel fluid={true} rounded={true} slideInterval={5000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </section>
  );
}
