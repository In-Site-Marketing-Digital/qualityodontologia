"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { GallerySection, ReviewsSection, FaqSection, FooterSection } from "@/components/SharedSections";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star, CheckCircle2, ArrowRight, Phone, MapPin, Clock,
  Microscope, Heart, Shield, Laptop, Moon, Activity,
  Bone, Gem, Baby, ScanFace, Scissors, Sparkles,
} from "lucide-react";

// WhatsApp SVG
const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WA_LINK = "https://api.whatsapp.com/send?phone=556184427201&text=Ol%C3%A1!%20Estava%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!";

const treatments = [
  { slug: "ortodontia", name: "Ortodontia", desc: "Corrija o alinhamento dos seus dentes com Invisalign, aparelhos estéticos e autoligáveis.", icon: <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#90cf8e]" aria-hidden><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9v-4H7v-2h2V8h2v2h2v2h-2v4zm4 0h-2v-6h2v6z"/></svg>, img: "/ortodontia.png" },
  { slug: "implantes", name: "Implantes Dentários", desc: "Recupere mastigação e estética com implantes titanium de alta durabilidade.", icon: <Bone className="w-7 h-7 text-[#90cf8e]" />, img: "/implantes.png" },
  { slug: "estetica", name: "Dentística & Estética", desc: "Facetas, lentes de contato, clareamento e restaurações estéticas.", icon: <Sparkles className="w-7 h-7 text-[#90cf8e]" />, img: "/estetica.png" },
  { slug: "odontopediatria", name: "Odontopediatria", desc: "Cuidado lúdico e acolhedor para a saúde bucal das crianças desde o primeiro dente.", icon: <Baby className="w-7 h-7 text-[#90cf8e]" />, img: "/odontopediatria.png" },
  { slug: "endodontia", name: "Endodontia (Canal)", desc: "Canal com microscópio operatório. Máxima precisão e mínimo desconforto.", icon: <Microscope className="w-7 h-7 text-[#90cf8e]" />, img: "/endodontia.png" },
  { slug: "protese", name: "Prótese Protocolo", desc: "Reabilitação total fixa sobre implantes. Sorria novamente sem remover a prótese.", icon: <Gem className="w-7 h-7 text-[#90cf8e]" />, img: "/protese.jpg" },
  { slug: "apneia", name: "Apneia do Sono", desc: "Aparelhos intraorais confortáveis que eliminam o ronco e melhoram seu sono.", icon: <Moon className="w-7 h-7 text-[#90cf8e]" />, img: "/apneia.jpg" },
  { slug: "atm", name: "Disfunção da ATM", desc: "Tratamento especializado para dores de cabeça, trava e bruxismo.", icon: <ScanFace className="w-7 h-7 text-[#90cf8e]" />, img: "/atm.jpg" },
  { slug: "cirurgia", name: "Cirurgia Odontológica", desc: "Extração de sisos, frenectomias e procedimentos pré-implante com segurança.", icon: <Scissors className="w-7 h-7 text-[#90cf8e]" />, img: "/cirurgia.jpg" },
];

const reviews = [
  { name: "Anderson Lima", text: "Atendimento impecável do começo ao fim. Fiz meu protocolo e o resultado foi além das expectativas. Equipe incrível!", initial: "A", since: "há 1 mês" },
  { name: "Marcos Andrade", text: "Minha filha adora ir ao dentista aqui. A odontopediatria é fantástica — lúdica e muito acolhedora.", initial: "M", since: "há 2 meses" },
  { name: "Larissa Fonseca", text: "Sofria anos com ATM, resolveram em poucas consultas. Serviço de altíssimo nível. Indico a todos.", initial: "L", since: "há 3 meses" },
];

const faqs = [
  { q: "Quais formas de pagamento a clínica aceita?", a: "PIX, cartões de débito e crédito parcelados em até 12x sem juros (sujeito a análise) e financiamentos especiais." },
  { q: "Como posso agendar uma consulta?", a: "A forma mais rápida é pelo WhatsApp. Respondemos em menos de 1 hora durante o horário de atendimento." },
  { q: "O tratamento de implantes é dolorido?", a: "Com anestesia adequada, o procedimento é indolor. O pós-operatório costuma ser leve e rápido." },
  { q: "A clínica atende emergências?", a: "Sim, reservamos horários para urgências. Entre em contato pelo WhatsApp informando sua situação." },
  { q: "Atende convênios?", a: "Trabalhamos com convênios selecionados. Entre em contato para verificar." },
];

// Reveal hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("active"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function HomePage() {
  useReveal();

  return (
    <>
      <Header />
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-section min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 hero-bg-img opacity-30 blur-sm" style={{ backgroundImage: 'url("/clinica4.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        {/* Organic blobs */}
        <div className="blob-green w-[500px] h-[500px] -bottom-20 -right-20 opacity-40" />
        <div className="blob-green w-[350px] h-[350px] -top-20 -left-16 opacity-25" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="bg-white/10 text-[#c8e9c7] border border-[#90cf8e]/40 backdrop-blur-sm mb-6 gap-2 py-1.5 px-4 rounded-full">
                <Star className="w-3 h-3 fill-[#90cf8e] text-[#90cf8e]" /> Qualidade e Excelência
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.08] mb-6">
                Seu sorriso,<br />
                nossa <span className="text-[#90cf8e]">especialidade</span>.
              </h1>
              <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-lg">
                Tecnologia de ponta, atendimento humanizado e especialistas em todas as áreas da odontologia. Prontos para transformar seu sorriso.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={WA_LINK} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap h-11 px-8 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
                >
                  <WaIcon /> Agendar via WhatsApp
                </a>
                <a
                  href="#tratamentos"
                  className="inline-flex items-center justify-center whitespace-nowrap h-11 px-8 border border-white/40 text-white bg-white/10 hover:bg-white hover:text-gray-900 rounded-full backdrop-blur-sm transition-all"
                >
                  Ver Especialidades
                </a>
              </div>
            </div>
            <div className="reveal hidden md:block" style={{ transitionDelay: "150ms" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#90cf8e]/20 rounded-3xl blur-3xl" />
                <Image src="/clinica1.jpg" alt="Quality Odontologia" width={600} height={500} className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS REMOVED ────────────────────────────────── */}

      {/* ── SOBRE ────────────────────────────────────────── */}
      <section className="py-24 bg-white" id="sobre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <Image src="/clinica3.jpg" alt="Clínica" width={600} height={500} className="rounded-3xl shadow-xl w-full h-[450px] object-cover" />
              </div>
            </div>
            <div className="reveal" style={{transitionDelay:"150ms"}}>
              <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">A Clínica</Badge>
              <h2 className="text-4xl font-black mb-5 leading-tight">O que é a <span className="text-[#90cf8e]">Quality Odontologia</span>?</h2>
              <p className="text-gray-500 leading-relaxed mb-7">Fundada com o propósito de redefinir a experiência odontológica, a Quality alia tecnologia de ponta com cuidado profundamente humanizado. Atendemos pacientes de todas as idades com especialistas em cada área.</p>
              <ul className="space-y-3 mb-8">
                {["Diagnóstico digital 3D com escaneamento intraoral", "Especialistas em todas as especialidades", "Protocolo rígido de biossegurança", "Ambiente climatizado e acolhedor"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#90cf8e] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={WA_LINK} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap h-10 px-6 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-lg shadow-[#90cf8e]/30 hover:scale-105 transition-all"
                >
                  <WaIcon /> Falar Conosco
                </a>
                <a
                  href="#tratamentos"
                  className="inline-flex items-center justify-center whitespace-nowrap h-10 px-6 border border-[#90cf8e] text-[#5aab58] hover:bg-[#eaf6ea] rounded-full transition-all"
                >
                  Ver Tratamentos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITUATIONS / CHECKLIST ───────────────────────── */}
      <section className="py-24 bg-[#111] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#90cf8e]/8 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge className="bg-[#90cf8e]/15 text-[#c8e9c7] border-0 text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full">Diagnóstico</Badge>
              <h2 className="text-4xl font-black text-white mb-5 leading-tight">Você tem percebido alguma dessas <span className="text-[#90cf8e]">situações</span>?</h2>
              <p className="text-white/60 mb-8 leading-relaxed">Condições bucais tratadas cedo resultam em procedimentos mais simples e resultados mais duradouros.</p>
              <ul className="space-y-3 mb-10">
                {["Dentes tortos, separados ou sobrepostos", "Dor ao mastigar ou sensibilidade excessiva", "Vergonha ou insegurança para sorrir", "Sangramento gengival frequente", "Ronco intenso e sono não reparador", "Dores de cabeça, pescoço ou mandíbula"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#90cf8e] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap h-11 px-8 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
              >
                <WaIcon /> Agendar Avaliação Gratuita
              </a>
            </div>
            <div className="reveal" style={{transitionDelay:"150ms"}}>
              <Image src="/ortodontia.png" alt="Sorrisos" width={580} height={500} className="rounded-3xl shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TREATMENTS ───────────────────────────────────── */}
      <section className="py-24 bg-gray-50" id="tratamentos">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Especialidades</Badge>
            <h2 className="text-5xl font-black mb-4">Nossos <span className="text-[#90cf8e]">Tratamentos</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Excelência em todas as vertentes da odontologia, do preventivo ao reabilitador.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <Link href={`/${t.slug}`} key={t.name}>
                <Card className="group h-full border border-gray-100 shadow-sm shadcn-card-hover overflow-hidden cursor-pointer p-0 gap-0">
                  {t.img && (
                    <div className="h-48 overflow-hidden">
                      <Image src={t.img} alt={t.name} width={400} height={250} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  {!t.img && (
                    <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                      <div className="text-6xl opacity-80">{t.icon}</div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#eaf6ea] rounded-xl flex items-center justify-center mb-4">{t.icon}</div>
                    <CardTitle className="text-lg mb-2 font-bold">{t.name}</CardTitle>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-[#5aab58] font-bold text-sm group-hover:gap-3 transition-all">
                      Saiba mais <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <a 
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
            >
              <WaIcon /> Agendar Consulta Agora
            </a>
          </div>
        </div>
      </section>


      {/* ── WHY US ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Diferenciais</Badge>
            <h2 className="text-4xl font-black">Por que realizar seu tratamento <span className="text-[#90cf8e]">aqui</span>?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Laptop className="w-8 h-8 text-[#90cf8e]" />, title: "Diagnóstico 3D", desc: "Scanner intraoral e tomografia cone beam para planejamentos milimétricos." },
              { icon: <Heart className="w-8 h-8 text-[#90cf8e]" />, title: "Atendimento Humano", desc: "Tratamos pessoas, não apenas dentes. Sua tranquilidade é nossa prioridade." },
              { icon: <Activity className="w-8 h-8 text-[#90cf8e]" />, title: "Acompanhamento", desc: "Monitoramos sua evolução de perto até o resultado final esperado." },
              { icon: <Shield className="w-8 h-8 text-[#90cf8e]" />, title: "Biossegurança", desc: "Protocolos internacionais de esterilização para sua total proteção." },
            ].map((item) => (
              <Card key={item.title} className="group border border-gray-100 shadow-sm hover:border-[#90cf8e] hover:shadow-xl hover:shadow-[#90cf8e]/10 hover:-translate-y-1.5 transition-all duration-300 border-b-4 border-b-[#90cf8e]">
                <CardContent className="p-7">
                  <div className="mb-5">{item.icon}</div>
                  <CardTitle className="text-base mb-3 font-bold">{item.title}</CardTitle>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-14">
            <a 
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
            >
              <WaIcon /> Quero Começar Meu Tratamento
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────── */}
      <section className="bg-[#90cf8e] py-16 relative overflow-hidden">
        <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-24 right-20 pointer-events-none" />
        <div className="absolute w-44 h-44 rounded-full bg-white/10 -bottom-16 left-16 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-4xl font-black text-white max-w-2xl">
              Pronto para transformar seu sorriso? <span className="text-[#111]">Agende agora</span> sua avaliação.
            </h2>
            <a 
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-full gap-2 shadow-xl hover:scale-105 transition-all flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25d366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}
