import Image from "next/image";

export default function ExperienciaImersiva() {
  return (
    <section className="aurea-immersive" aria-labelledby="aurea-immersive-title" data-reveal>
      <div className="aurea-immersive-image">
        <Image src="/imoveis/villa-serra-dourada/piscina.png" alt="Piscina de borda infinita integrada à arquitetura da Villa Serra Dourada" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="aurea-immersive-shade" />
      <div className="aurea-immersive-border" aria-hidden="true" />
      <div className="aurea-immersive-content">
        <div className="aurea-immersive-kicker"><span>01</span><span className="aurea-immersive-rule" /><span>Arquitetura & natureza</span></div>
        <h2 id="aurea-immersive-title" className="aurea-immersive-title">Há lugares que<br /><em>não se explicam.</em><br />Se vivenciam.</h2>
        <p>Volumes contemporâneos, luz natural e vistas que transformam cada instante em uma experiência única.</p>
        <a href="#contato" className="aurea-immersive-link">Conheça esta experiência <span aria-hidden>↗</span></a>
      </div>
      <div className="aurea-immersive-footer" aria-hidden="true"><span>VILLA SERRA DOURADA</span><span>NOVA LIMA · MG</span></div>
    </section>
  );
}
