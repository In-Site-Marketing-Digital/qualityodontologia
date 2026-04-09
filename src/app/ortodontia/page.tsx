"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { FooterSection, TeamSection } from "@/components/SharedSections";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "C:/Users/gabri/Documents/insite/qualityodontologia/quality-next/src/components/ui/accordion";
import {
  Star, ArrowRight, ShieldCheck, Zap, Heart,
  Glasses, Clock, Sparkles, Smile, Laptop, Scan,
  Check, Award, Settings2, MapPin, Coffee
} from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send?phone=556184427201&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20avalia%C3%A7%C3%A3o%20ortod%C3%B4ntica!";

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

export default function OrtodontiaLP() {
  useReveal();

  return (
    <>
      <Header />
      
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#111]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/ortodontia_smile.png" 
            alt="Sorriso Alinhado" 
            fill 
            className="object-cover opacity-50 blur-[2px] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
          <div className="max-w-3xl reveal">
            <Badge className="bg-[#90cf8e]/20 text-[#c8e9c7] border-0 text-xs font-bold tracking-[0.2em] uppercase mb-6 px-5 py-2 rounded-full backdrop-blur-md">
              Ortodontia na Asa Sul
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8">
              O caminho seguro para o seu <span className="text-[#90cf8e]">sorriso alinhado</span>.
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Do clássico aparelho metálico às tecnologias invisíveis, oferecemos soluções ortodônticas em um ambiente moderno e acolhedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center h-14 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-3 shadow-2xl shadow-[#90cf8e]/40 hover:scale-105 transition-all text-lg"
              >
                Agendar Minha Avaliação <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-4 px-2">
                <div className="text-sm">
                  <div className="flex text-yellow-500 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-white/60 font-medium">Avaliações Positivas no Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITATIVE STATS ────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Odontologia", value: "Alta Performance", icon: <Award className="w-5 h-5 text-[#90cf8e]" /> },
              { label: "Tecnologia", value: "Digital HD", icon: <Laptop className="w-5 h-5 text-[#90cf8e]" /> },
              { label: "Localização", value: "Asa Sul", icon: <MapPin className="w-5 h-5 text-[#90cf8e]" /> },
              { label: "Atendimento", value: "Acolhedor", icon: <Heart className="w-5 h-5 text-[#90cf8e]" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2 reveal" style={{transitionDelay: `${i*100}ms`}}>
                <div className="w-12 h-12 rounded-full bg-[#f0f9f0] flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <span className="text-xl font-black text-gray-900">{stat.value}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE EXPERTS ─────────────────────────────── */}
      <TeamSection />

      {/* ── APPLIANCES OPTIONS ────────────────────────────── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Tratamentos</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">A solução ideal para <span className="text-[#90cf8e]">cada caso</span>.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                t: "Metálico Tradicional", 
                tag: "Eficiência Clássica",
                d: "O método mais comprovado para alinhar seu sorriso com precisão e custo-benefício.",
                icon: <Settings2 className="w-6 h-6" />,
              },
              { 
                t: "Autoligável", 
                tag: "Performance Moderna",
                d: "Braquetes tecnológicos que reduzem o tempo de tratamento e proporcionam mais conforto.",
                icon: <Zap className="w-6 h-6" />,
              },
              { 
                t: "Estético", 
                tag: "Discrição",
                d: "Materiais como Safira ou Cerâmica que se camuflam com a cor natural dos seus dentes.",
                icon: <Sparkles className="w-6 h-6" />,
              },
              { 
                t: "Alinhadores", 
                tag: "Liberdade",
                d: "Removíveis e invisíveis. O que há de mais moderno para quem busca máxima conveniência.",
                icon: <Smile className="w-6 h-6" />,
              }
            ].map((app, i) => (
              <Card key={i} className="reveal border-none shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#eaf6ea] text-[#5aab58] rounded-xl flex items-center justify-center mb-6 text-left">
                    {app.icon}
                  </div>
                  <Badge className="bg-[#90cf8e]/10 text-[#5aab58] border-0 mb-3 text-[10px] uppercase font-black">{app.tag}</Badge>
                  <h3 className="text-xl font-bold mb-4 leading-tight text-left">{app.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed text-left">{app.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Nossa Clínica</Badge>
              <h2 className="text-4xl font-black mb-6 leading-tight">Um espaço planejado para o <span className="text-[#90cf8e]">seu conforto</span>.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Localizada no coração da Asa Sul, a Quality Odontologia oferece um ambiente climatizado e equipado com tecnologias que tornam seu tratamento mais ágil e preciso.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { t: "Recepção Moderna", i: <Coffee className="w-5 h-5" /> },
                   { t: "Salas Climatizadas", i: <Heart className="w-5 h-5" /> },
                   { t: "Higiene Rigorosa", i: <ShieldCheck className="w-5 h-5" /> },
                   { t: "Fácil Acesso", i: <MapPin className="w-5 h-5" /> }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="text-[#90cf8e]">{item.i}</div>
                      <span className="text-sm font-bold text-gray-700">{item.t}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="reveal grid grid-cols-2 gap-4" style={{transitionDelay:"150ms"}}>
               <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/clinica1.jpg" alt="Estrutura Quality" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-[#90cf8e]/20">
                    <Image src="/clinica4.jpg" alt="Consultório Real" fill className="object-cover" />
                  </div>
               </div>
               <div className="pt-8 space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/clinica2.jpg" alt="Recepção Real" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/clinica3.jpg" alt="Equipamentos Clínicos" fill className="object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JORNADA QUALITY (Experience Steps) ────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">A Experiência</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Como funciona o seu <span className="text-[#90cf8e]">tratamento</span>.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                t: "Acolhimento", 
                d: "Recebemos você em nossa recepção para entender suas necessidades.",
                img: "/clinica2.jpg" 
              },
              { 
                step: "02", 
                t: "Avaliação 3D", 
                d: "Utilizamos escaneamento digital para uma visão completa do seu sorriso.",
                img: "/clinica3.jpg" 
              },
              { 
                step: "03", 
                t: "Planejamento", 
                d: "Definimos o melhor tipo de aparelho para seus objetivos.",
                img: "/clinica1.jpg" 
              },
              { 
                step: "04", 
                t: "Transformação", 
                d: "Acompanhamento detalhado em todas as etapas do processo.",
                img: "/ortodontia_smile.png" 
              }
            ].map((item, i) => (
              <div key={i} className="reveal bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all" style={{transitionDelay: `${i*100}ms`}}>
                <div className="relative h-48">
                  <Image src={item.img} alt={item.t} fill className="object-cover" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#90cf8e] text-white rounded-full flex items-center justify-center font-black text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h4 className="text-lg font-black mb-2">{item.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-white" id="faq-orto">
         <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
               <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Tire suas dúvidas</Badge>
               <h2 className="text-4xl font-black text-center">Perguntas <span className="text-[#90cf8e]">Frequentes</span></h2>
            </div>
            <Accordion className="space-y-4">
              {[
                { q: "Qual a diferença entre o metálico e o autoligável?", a: "O autoligável dispensa o uso de borrachinhas coloridas, o que reduz o atrito e pode acelerar o tratamento." },
                { q: "Aparelho estético funciona igual ao metálico?", a: "Sim, os resultados são os mesmos. A diferença principal é a discrição do material utilizado." },
                { q: "Quanto tempo dura em média o tratamento?", a: "Cada caso é único. Após a avaliação digital, fornecemos uma estimativa baseada no seu plano de tratamento." },
                { q: "A clínica possui facilidades de pagamento?", a: "Sim, trabalhamos com diversas formas de pagamento para facilitar o início do seu tratamento." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="reveal border border-gray-100 rounded-2xl px-6 shadow-sm overflow-hidden" style={{transitionDelay:`${i*50}ms`}}>
                  <AccordionTrigger className="font-bold text-gray-800 hover:no-underline hover:text-[#5aab58] py-5 text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-500 leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
         </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="py-24 bg-[#90cf8e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-8 reveal">Seu sorriso novo começa <span className="text-[#111]">hoje</span>.</h2>
           <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto reveal" style={{transitionDelay:"100ms"}}>
             Agende sua avaliação e descubra o plano ideal para você.
           </p>
           <a 
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="reveal inline-flex items-center justify-center h-16 px-12 bg-white text-[#111] font-black rounded-full gap-3 shadow-2xl hover:scale-105 transition-all text-xl"
              style={{transitionDelay:"150ms"}}
           >
             Falar no WhatsApp
           </a>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
