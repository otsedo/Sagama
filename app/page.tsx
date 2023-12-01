import AboutUs from "@/components/sections/about-us";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import NuestrosClientes from "@/components/sections/nuestros-clientes";
import PerfilEmpresarial from "@/components/sections/perfil-empresarial";
import TipoMantenimientos from "@/components/sections/tipo-mantenimientos";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <PerfilEmpresarial />
      <NuestrosClientes />
      <TipoMantenimientos />
      <Contact />
    </main>
  )
}
