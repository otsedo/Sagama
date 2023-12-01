import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import NuestrosClientes from "@/components/nuestros-clientes";
import PerfilEmpresarial from "@/components/perfil-empresarial";
import TipoMantenimientos from "@/components/tipo-mantenimientos";

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
