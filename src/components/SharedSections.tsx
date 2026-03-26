"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star, Phone, MapPin, Clock
} from "lucide-react";
const WA_LINK = "https://api.whatsapp.com/send?phone=556184427201&text=Ol%C3%A1!%20Estava%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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

export function GallerySection() {
  return (
    <section className="py-24 bg-[#111]" id="estrutura">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Badge className="bg-[#90cf8e]/15 text-[#c8e9c7] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Nossa Estrutura</Badge>
          <h2 className="text-4xl font-black text-white">Conheça Nossa <span className="text-[#90cf8e]">Clínica</span></h2>
          <p className="text-white/60 mt-3">Ambiente projetado para o seu máximo conforto e segurança.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden" style={{height:500}}>
            <Image src="/clinica1.jpg" alt="Recepção" width={800} height={500} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{height:240}}>
            <Image src="/clinica2.jpg" alt="Consultório" width={400} height={240} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{height:240}}>
            <Image src="/clinica3.jpg" alt="Equipamentos" width={400} height={240} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        <div className="text-center mt-10">
          <a 
            href={WA_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 hover:scale-105 transition-all"
          >
            <WaIcon /> Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
}

export const ReviewsSection = () => {
  useEffect(() => {
    // Inject TrustIndex loader script manually on mount
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?3905510683a81996f1961d16c12";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount to prevent duplicates
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50" id="avaliacoes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">Avaliações</Badge>
          <h2 className="text-4xl font-black mb-3">O que nossos <span className="text-[#90cf8e]">pacientes</span> dizem</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="font-bold text-sm text-gray-700">4.9 / 5 no Google</span>
          </div>
        </div>
        <div className="mt-12 min-h-[300px]">
          {/* Official TrustIndex Placeholder - Hydration safe */}
          <div 
            className="ti-widget" 
            data-layout-id="13" 
            data-layout-category="slider"
            data-pid="3905510683a81996f1961d16c12" 
            data-trustindex-widget="true"
            data-no-translation="true"
            data-language="pt"
            suppressHydrationWarning
          />
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://share.google/VuVVcVHdPaHKOK78p" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
          >
            <Star className="w-4 h-4 fill-white" /> Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">FAQ</Badge>
          <h2 className="text-4xl font-black">Dúvidas <span className="text-[#90cf8e]">Frequentes</span></h2>
        </div>
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-2xl px-6 shadow-sm hover:border-[#90cf8e] transition-colors">
              <AccordionTrigger className="font-semibold text-sm text-left hover:no-underline hover:text-[#5aab58] py-5">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <a 
            href={WA_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
          >
            <WaIcon /> Ainda tem dúvidas? Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#111] text-white/70 text-sm" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <Image src="/logo-branco.png" alt="Quality Odontologia" width={160} height={48} className="h-10 w-auto object-contain mb-5" />
            <p className="leading-relaxed text-white/55"> Referência em saúde bucal com tecnologia de ponta e atendimento humanizado.</p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.instagram.com/quality.odontologia_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#90cf8e] hover:text-white transition-colors text-sm font-semibold">Instagram</a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-5 text-sm">Tratamentos</h5>
            <ul className="space-y-2.5">
              {["Ortodontia","Implantes Dentários","Prótese Protocolo","Dentística Estética","Odontopediatria","Endodontia","Apneia do Sono","Disfunção da ATM"].map((t) => (
                <li key={t}><a href="/#tratamentos" className="hover:text-[#90cf8e] transition-colors">{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-5 text-sm">Links Rápidos</h5>
            <ul className="space-y-2.5">
              {[["A Clínica","/#sobre"],["Tratamentos","/#tratamentos"],["Estrutura","/#estrutura"],["Avaliações","/#avaliacoes"]].map(([l,h]) => (
                <li key={l}><a href={h} className="hover:text-[#90cf8e] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-5 text-sm">Contato</h5>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start"><Phone className="w-4 h-4 text-[#90cf8e] mt-0.5 flex-shrink-0" /> (61) 9 8442-7201</li>
              <li className="flex gap-3 items-start"><MapPin className="w-4 h-4 text-[#90cf8e] mt-0.5 flex-shrink-0" /> SEPS Q 715/915 Centro Clínico Pacini<br/>BL D salas 303/409 - Asa Sul, Brasília - DF</li>
              <li className="flex gap-3 items-start"><Clock className="w-4 h-4 text-[#90cf8e] mt-0.5 flex-shrink-0" /> Seg–Sex: 8h–18h</li>
            </ul>
            <div className="mt-6">
              <a 
                href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap h-10 px-6 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 transition-all w-full sm:w-auto"
              >
                <WaIcon /> Chama no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <Separator className="bg-white/8" />
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-3 text-xs text-white/35">
          <span>© 2026 Quality Odontologia. Todos os direitos reservados.</span>
          <span>Desenvolvido com ❤ para sorrisos eternos.</span>
        </div>
      </div>
    </footer>
  );
}
