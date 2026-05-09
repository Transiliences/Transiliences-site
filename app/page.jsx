"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Menu, X, Send } from "lucide-react";

const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Accompagnement", href: "#accompagnement" },
  { label: "Équipe", href: "#equipe" },
  { label: "Références", href: "#references" },
  { label: "Contact", href: "#contact" }
];

const offers = [
  { title: "Conception de projet", text: "Nous animons un dispositif de co-construction autour de votre projet avec toutes les parties prenantes. Les livrables peuvent aller du plan stratégique à la mise en place d’outils opérationnels.", mark: "half" },
  { title: "Gouvernance collaborative", text: "Nous vous aidons à concevoir et animer le modèle de gouvernance le plus adapté à vos objectifs et à votre écosystème de travail.", mark: "round" },
  { title: "Recherche de partenaires", text: "Nous identifions ensemble la diversité des partenaires favorables à la dynamique territoriale de votre projet. Nous facilitons la mise en lien et la structuration de votre partenariat.", mark: "split" },
  { title: "Recherche de financements", text: "Nous vous orientons vers les sources de financement publiques et privées les plus adaptées à votre ingénierie financière, votre projet et votre structure.", mark: "half" },
  { title: "Évaluation-prospective", text: "Nous pilotons des dispositifs d’évaluation-prospective partagés et participatifs en lien avec tous les partenaires, sur la base de critères quantitatifs et qualitatifs définis collaborativement.", mark: "round" },
  { title: "Coopération européenne", text: "Nous vous accompagnons dans la conception, la mise en œuvre et l’évaluation de vos projets de coopération européenne, qu’il s’agisse de mobilités simples ou de partenariats stratégiques plus complexes.", mark: "split" }
];

const references = [
  "Gouvernance participative du programme européen LEADER",
  "Évaluation-prospective du projet de territoire 2021-2027",
  "Transitions & nouvelles gouvernances locales",
  "Smart pupils",
  "Théâtre de verdure citoyen",
  "Création d’une brasserie artisanale & écologique",
  "Spectacle vivant et jeune public : réseaux et coopération internationale",
  "L’Agoractive, innovation citoyenne"
];

function OrganicShape({ className = "" }) { return <div className={`pointer-events-none absolute rounded-full ${className}`} />; }

function Symbol({ type }) {
  const common = "mx-auto mb-8 h-16 w-16 text-neutral-600";
  if (type === "round") return <div className={`${common} rounded-full bg-neutral-600`} style={{ clipPath: "polygon(50% 0, 100% 0, 100% 55%, 55% 55%, 55% 100%, 0 100%, 0 0)" }} />;
  if (type === "split") return <div className={`${common} relative`}><span className="absolute left-2 top-0 h-16 w-8 rounded-l-full bg-neutral-600" /><span className="absolute right-2 top-0 h-16 w-5 rounded-r-full bg-neutral-600" /></div>;
  return <div className={`${common} relative`}><span className="absolute left-0 top-0 h-16 w-8 rounded-l-full bg-neutral-600" /><span className="absolute right-0 top-0 h-16 w-8 rounded-r-full bg-neutral-600" /></div>;
}

function SectionIntro({ title, children, id }) {
  return <section id={id} className="relative px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-5xl text-center"><h2 className="font-sans text-4xl font-semibold tracking-[-0.04em] text-[#303044] md:text-6xl">{title}</h2><div className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#303044]/85 md:text-xl md:leading-10">{children}</div></div></section>;
}

export default function TransiliencesSite() {
  const [open, setOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen scroll-smooth bg-[#f4f2ee] text-[#303044]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#303044]/10 bg-[#f4f2ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#accueil" className="flex items-center gap-3">
            <span className="relative flex h-10 w-14 items-center justify-center overflow-hidden rounded-full"><span className="absolute inset-0 rounded-full border border-[#46bdb7]/50" /><span className="absolute h-8 w-20 rounded-[50%] border border-[#46bdb7]/40" /><span className="absolute h-5 w-16 rounded-[50%] border border-[#46bdb7]/50" /></span>
            <span className="text-xl font-semibold tracking-[-0.04em] text-black">Transiliences.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#303044]/75 md:flex">{nav.map((item) => <a key={item.href} href={item.href} className="hover:text-black">{item.label}</a>)}</nav>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {open && <div className="border-t border-[#303044]/10 px-6 py-5 md:hidden"><div className="flex flex-col gap-4 text-sm">{nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</div></div>}
      </header>

      <section id="accueil" className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-24 md:px-10">
        <OrganicShape className="left-[-10rem] top-0 h-[34rem] w-[34rem] bg-[#43a965]" />
        <OrganicShape className="left-[8rem] top-[-9rem] h-[38rem] w-[38rem] bg-[#bdfb62]" />
        <OrganicShape className="right-[9rem] top-[-8rem] h-[40rem] w-[40rem] bg-[#56d0d6] opacity-90" />
        <OrganicShape className="right-[-10rem] top-[-5rem] h-[42rem] w-[42rem] bg-[#3db9b2] opacity-80" />
        <div className="absolute inset-0 bg-[#f4f2ee]/25" />
        <div className="relative mx-auto max-w-6xl text-center"><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><p className="mx-auto mb-3 w-fit bg-[#4bbec4]/55 px-8 py-2 text-3xl font-light tracking-[-0.04em] md:text-5xl">Agence</p><h1 className="mx-auto w-fit bg-[#4bbec4]/55 px-4 py-2 text-4xl font-medium uppercase tracking-[0.08em] md:text-6xl">Transiliences</h1><p className="mt-8 text-2xl tracking-[0.02em] text-[#303044] md:text-4xl">Accompagner les transitions & les coopérations</p></motion.div></div>
      </section>

      <SectionIntro id="explorateurs" title="Explorateurs du changement"><p>Depuis plus de 25 ans, nous parcourons les territoires européens, ruraux et urbains, pour y encourager des initiatives et des élans en faveur de façons plus contemporaines d’habiter les lieux et les espaces. Nous favorisons les coopérations autour de ces communs écologiques et sociaux. Nous organisons le chemin pour y parvenir de manière conjointe, coordonnée, structurée et efficace. Faire ensemble, partager et coopérer supposent des processus singuliers propres à chaque projet, sans cesse renouvelés. Cette capacité à concevoir une démarche spécifique pour votre projet est celle que nous vous proposons.</p></SectionIntro>

      <section id="accompagnement" className="relative overflow-hidden bg-[#f2f1ef] px-6 py-20 md:px-10 md:py-28"><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#303044 0.8px, transparent 0.8px)", backgroundSize: "9px 9px" }} /><div className="relative mx-auto max-w-6xl text-center"><h2 className="text-4xl font-light tracking-[-0.04em] md:text-6xl">Notre offre d’accompagnement</h2><div className="mx-auto mt-10 max-w-5xl space-y-8 text-lg leading-9 text-[#303044]/85 md:text-xl md:leading-10"><p>Vous avez un projet ancré sur un territoire européen, en milieu rural ou urbain, vous agissez dans le domaine de la solidarité internationale, de la coopération européenne ou d’actions territoriales locales ? Vous êtes concernés par l’économie sociale et solidaire et les transitions sociale, économique et environnementale ?</p><p>Nous vous accompagnons aux différentes étapes de votre projet de manière participative, ouverte et coopérative, grâce à la mobilisation d’outils de facilitation et d’analyse adaptés à votre structure et à votre façon de travailler.</p></div><div className="mt-20 grid gap-y-16 md:grid-cols-3 md:gap-x-14">{offers.map((item) => <article key={item.title} className="px-3 text-center"><Symbol type={item.mark} /><h3 className="text-2xl font-light tracking-[-0.04em]">{item.title}</h3><p className="mx-auto mt-6 max-w-sm text-lg leading-8 text-[#303044]/78">{item.text}</p></article>)}</div></div></section>

      <section id="equipe" className="relative overflow-hidden bg-[#dedbea] px-6 py-20 md:px-10 md:py-28"><OrganicShape className="left-[-12rem] top-[-10rem] h-[40rem] w-[40rem] bg-[#b2ce61]" /><div className="relative mx-auto max-w-6xl"><div className="mx-auto max-w-4xl text-center"><h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">L’équipe</h2><div className="mx-auto mt-5 h-[3px] w-12 bg-[#303044]" /><p className="mt-12 text-xl leading-10 text-[#303044]/85 md:text-2xl">Notre équipe repose sur plus de 25 années de pratiques et d’expériences professionnelles dans le domaine de l’action publique, de la coopération internationale, et de l’entrepreneuriat dans l’économie sociale et solidaire.</p></div><div className="mt-20 grid gap-12 md:grid-cols-2"><article className="relative overflow-hidden rounded-[1.5rem] bg-[#c7d9e5]/70 p-6 md:p-8"><div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#57c9d2]/45" /><div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#b6c4c5]"><div className="flex h-full items-center justify-center text-center text-sm text-[#303044]/60">Photo Anne-Paule Béïs</div></div><div className="relative mt-8"><p className="text-lg text-[#303044]/75">Coopération internationale & action publique</p><h3 className="mt-2 text-3xl font-light tracking-[-0.04em]">Anne-Paule Béïs</h3><p className="mt-8 text-lg leading-8 text-[#303044]/85">Attachée territoriale, responsable de la coopération européenne, de la participation des habitants et des processus coopératifs transversaux, publics-privés, elle est spécialisée dans les projets d’innovation rurale en faveur de la transition écologique, de la justice sociale et de la transition démocratique. Elle est bilingue en castillan, fluide en anglais et travaille quotidiennement dans des univers professionnels complexes et interculturels.</p></div></article><article className="relative overflow-hidden rounded-[1.5rem] bg-[#c7d9e5]/70 p-6 md:p-8"><div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#57c9d2]/45" /><div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#b6c4c5]"><div className="flex h-full items-center justify-center text-center text-sm text-[#303044]/60">Photo Bruno Watrin</div></div><div className="relative mt-8"><p className="text-lg text-[#303044]/75">Transformation de l’entreprise & des territoires</p><h3 className="mt-2 text-3xl font-light tracking-[-0.04em]">Bruno Watrin</h3><p className="mt-8 text-lg leading-8 text-[#303044]/85">Entrepreneur, co-fondateur de la SCOP CO-HOP, brasserie artisanale et écologique en Ariège, il participe aux réseaux des entrepreneurs engagés dans les démarches RSE. Il est investi dans les collectifs professionnels désireux de créer des communautés de pratiques en faveur des transitions sociales et écologiques et des enjeux de filières. Élu local, il expérimente des innovations démocratiques pour la participation des habitants au quotidien.</p></div></article></div></div></section>

      <section id="references" className="bg-[#dedbea] px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><h2 className="text-5xl font-light tracking-[-0.05em] md:text-7xl">Nos références</h2><div className="mt-14 grid gap-8 md:grid-cols-2">{references.map((title) => <article key={title} className="group relative min-h-[250px] overflow-hidden bg-[#8d8d98] p-8 text-white md:min-h-[320px]"><div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)", backgroundSize: "7px 7px" }} /><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" /><div className="relative flex h-full min-h-[190px] flex-col justify-between md:min-h-[260px]"><p className="text-sm font-semibold">1 min de lecture</p><div className="flex items-end justify-between gap-6"><h3 className="max-w-xl text-3xl font-light leading-tight tracking-[-0.04em] md:text-4xl">{title}</h3><ArrowUpRight className="h-6 w-6 opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" /></div></div></article>)}</div></div></section>

      <section id="contact" className="relative overflow-hidden bg-[#f4f2ee] px-6 py-20 md:px-10 md:py-28"><OrganicShape className="right-[-18rem] top-[-12rem] h-[40rem] w-[40rem] bg-[#56d0d6]/55" /><div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start"><div><h2 className="text-5xl font-light tracking-[-0.05em] md:text-7xl">Contact</h2><p className="mt-8 max-w-xl text-xl leading-9 text-[#303044]/85">Certains projets demandent davantage qu’une ingénierie. Ils nécessitent une capacité à relier des acteurs, des temporalités, des institutions et des usages parfois éloignés. Transiliences intervient dans ces espaces de coopération.</p><div className="mt-10 space-y-4 text-lg text-[#303044]/80"><p className="flex items-center gap-3"><Mail size={19} /> contact@transiliences.fr</p><p className="flex items-center gap-3"><MapPin size={19} /> Ariège · France · Europe</p></div></div><form className="rounded-[1.5rem] border border-[#303044]/10 bg-white/60 p-6 shadow-sm md:p-8" onSubmit={(e) => e.preventDefault()}><div className="grid gap-5"><label className="grid gap-2 text-sm text-[#303044]/70">Nom<input className="rounded-xl border border-[#303044]/10 bg-white px-4 py-3 outline-none focus:border-[#303044]/40" placeholder="Votre nom" /></label><label className="grid gap-2 text-sm text-[#303044]/70">Email<input type="email" className="rounded-xl border border-[#303044]/10 bg-white px-4 py-3 outline-none focus:border-[#303044]/40" placeholder="votre@email.fr" /></label><label className="grid gap-2 text-sm text-[#303044]/70">Message<textarea rows="6" className="rounded-xl border border-[#303044]/10 bg-white px-4 py-3 outline-none focus:border-[#303044]/40" placeholder="Votre projet, votre territoire, votre besoin." /></label><button className="inline-flex w-fit items-center gap-2 rounded-full bg-[#303044] px-6 py-3 text-sm text-white transition hover:bg-black">Envoyer <Send size={16} /></button></div></form></div></section>

      <footer className="border-t border-[#303044]/10 bg-[#f4f2ee] px-6 py-8 text-sm text-[#303044]/60 md:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row"><p>© {year} Transiliences. Accompagner les transitions & les coopérations.</p><p>Agence · territoires · coopération européenne · ESS · participation citoyenne</p></div></footer>
    </main>
  );
}
