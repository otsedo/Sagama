import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="mb-52">
      <div className="flex flex-col lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 md:h-[670px]">

        <div className="col-span-1 lg:mx-0 lg:my-auto md:mx-0 md:my-auto">

          <h1 className="text-6xl xl:text-6xl lg:text-6xl md:text-4xl text-primaryBlue font-bold leading-tight text-center lg:mx-5 sm:py-4">
            Sagama Administración de Condominios
          </h1>

          <p className="text-secondaryBlue text-2xl py-4 m-4 xl:text-4xl lg:text-3xl md:text-2xl lg:ml-24 lg:m-12 lg:tracking-wider lg:font-medium px-8 sm:text-3xl sm:mb-5 sm:mx-8">
            Somos una empresa especializada en la administración y mantenimiento
            de condominios residenciales, comprometida en garantizar el correcto
            funcionamiento y la seguridad de las instalaciones para que los
            propietarios disfruten de un hogar tranquilo y sin preocupaciones.
          </p>
          <div className="flex m-2 justify-center group">
            <a
              href="https://wa.me/+18093360693"
              target="_blank"
              className="flex justify-center gap-8 bg-primaryBlue text-white text-2xl p-5 rounded-xl mb-6 w-4/5 text-center align-middle items-center transition-colors duration-300 ease-in-out group-hover:bg-secondaryBlue"
            >
              Vamos a chatear <FaWhatsapp className='h-10 w-10 text-white bg-primaryBlue transition-colors duration-300 ease-in-out group-hover:bg-secondaryBlue' />
            </a>
          </div>
        </div>

        <div className="relative col-span-2 md:mr-10 my-0 align-middle flex justify-center items-center">
          <Image
            src="/img/hero.jpg"
            alt="Imagen de edificios"
            width={1920}
            height={760}
            className="hidden md:block z-0"
          />
          <Image
            src="/img/hero-mobile.jpg"
            alt="Imagen de edificios"
            width={500}
            height={200}
            className="block md:hidden z-10"
          />
        </div>
      </div>
    </section>
  );
}
