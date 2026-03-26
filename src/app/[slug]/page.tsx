import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { GallerySection, ReviewsSection, FaqSection, FooterSection } from "@/components/SharedSections";

const WA_LINK = "https://api.whatsapp.com/send?phone=556184427201&text=Ol%C3%A1!%20Estava%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const treatmentsData = {
  ortodontia: {
    hero: {
      title: "Ortodontia",
      subtitle: "Alinhamento e harmonia para o seu sorriso.",
      desc: "Tratamentos modernos e discretos, como o Invisalign e aparelhos autoligáveis, para garantir um sorriso perfeito e alinhado com o máximo de conforto.",
      image: "/ortodontia.png"
    },
    whatIs: "A ortodontia é a especialidade odontológica responsável por corrigir a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou que não se encaixam corretamente são difíceis de serem mantidos limpos, o que pode causar perda precoce.",
    why: [
      { t: "Estética", d: "Sorriso alinhado e perfeitamente harmônico." },
      { t: "Função", d: "Melhora da mastigação e da fala." },
      { t: "Prevenção", d: "Facilita a higiene, prevenindo cáries e desgastes." },
      { t: "Conforto", d: "Elimina dores de cabeça e tensões no maxilar." }
    ],
    process: [
      "Avaliação Clínica e Escaneamento Intraoral 3D",
      "Planejamento Digital e Apresentação do Caso",
      "Instalação do Aparelho ou Entrega dos Alinhadores",
      "Manutenções e Acompanhamentos Periódicos",
      "Finalização e Instalação da Contenção"
    ]
  },
  implantes: {
    hero: {
      title: "Implantes Dentários",
      subtitle: "Recupere a segurança de mastigar e sorrir.",
      desc: "Soluções definitivas e estéticas para a reposição de dentes perdidos, utilizando tecnologia de ponta para cirurgias guiadas e indolores.",
      image: "/implantes.png"
    },
    whatIs: "Os implantes dentários são suportes ou estruturas de metal (normalmente de titânio) posicionadas cirurgicamente no osso maxilar abaixo da gengiva para substituir as raízes dentárias, permitindo fixar dentes substitutos sobre eles.",
    why: [
      { t: "Segurança", d: "Dentes fixos que não escorregam ao mastigar." },
      { t: "Durabilidade", d: "Material biocompatível de altíssima resistência." },
      { t: "Estética", d: "Resultado idêntico aos dentes naturais." },
      { t: "Saúde Óssea", d: "Previne a perda óssea na região do dente perdido." }
    ],
    process: [
      "Avaliação e Solicitação de Tomografia 3D",
      "Planejamento Virtual da Cirurgia Guiada",
      "Instalação Cirúrgica do Implante (Titanium)",
      "Período de Osseointegração",
      "Confecção e Instalação da Prótese Definitiva"
    ]
  },
  estetica: {
    hero: {
      title: "Dentística e Estética",
      subtitle: "A arte de transformar sorrisos.",
      desc: "Facetas em resina ou porcelana, lentes de contato dental e clareamento para um sorriso branco, brilhante e perfeitamente desenhado.",
      image: "/estetica.png"
    },
    whatIs: "A dentística estética atua tanto na cosmética quanto na restauração dental. O objetivo principal é manter toda a integridade estrutural e funcional do dente, somado à valorização da beleza do sorriso através da harmonia de forma, textura e cor.",
    why: [
      { t: "Autoestima", d: "Recupere a confiança ao sorrir publicamente." },
      { t: "Rapidez", d: "Resultados perceptíveis em pouquíssimas sessões." },
      { t: "Conservador", d: "Técnicas modernas preservam a estrutura natural." },
      { t: "Personalização", d: "Sorriso planejado exclusivamente para o seu rosto." }
    ],
    process: [
      "Avaliação Estética e Fotografias do Rosto",
      "Mockup (Teste Drive) do Novo Sorriso",
      "Preparo Minimamente Invasivo",
      "Confecção das Facetas/Lentes",
      "Cimentação e Ajustes Finais"
    ]
  },
  odontopediatria: {
    hero: {
      title: "Odontopediatria",
      subtitle: "Cuidado lúdico desde o primeiro dentinho.",
      desc: "Um ambiente acolhedor e técnicas de condicionamento para que seu filho cresça sem traumas e com a saúde bucal em dia.",
      image: "/odontopediatria.png"
    },
    whatIs: "A odontopediatria é a área direcionada a bebês, crianças e adolescentes. O foco não está apenas em tratar cáries, mas em guiar o desenvolvimento através de prevenção, ensinando bons hábitos e criando uma relação amigável com a cadeira do dentista.",
    why: [
      { t: "Prevenção", d: "Evita problemas complexos no futuro." },
      { t: "Acolhimento", d: "Atendimento sem medo e sem traumas." },
      { t: "Orientação", d: "Educação em saúde bucal para a família toda." },
      { t: "Desenvolvimento", d: "Acompanhamento do crescimento ósseo e dental." }
    ],
    process: [
      "Primeira Consulta Lúdica e Condicionamento",
      "Evidenciação de Placa e Instrução de Higiene",
      "Limpeza Profissional e Aplicação de Flúor",
      "Prevenção e Tratamento de Possíveis Lesões",
      "Retornos Periódicos Preventivos"
    ]
  },
  endodontia: {
    hero: {
      title: "Endodontia",
      subtitle: "Tratamento de canal indolor e de alta precisão.",
      desc: "Utilizamos microscopia operatória e instrumentos mecanizados para realizar tratamentos de canal em sessão única, com total conforto.",
      image: "/endodontia.png"
    },
    whatIs: "Popularmente conhecido como tratamento de canal, a endodontia é a área da odontologia responsável por tratar as doenças da polpa dentária (o nervo do dente). Com o avanço da tecnologia, o processo se tornou rápido, eficiente e completamente isento de dor.",
    why: [
      { t: "Alívio Imediato", d: "Elimina imediatamente dores agudas." },
      { t: "Preservação", d: "Salva dentes que seriam extraídos." },
      { t: "Tecnologia", d: "Uso de microscopia e ultrassom para precisão." },
      { t: "Rapidez", d: "Muitos casos são resolvidos em sessão única." }
    ],
    process: [
      "Diagnóstico Clínico e Radiográfico",
      "Anestesia Computadorizada (Sem Dor)",
      "Isolamento Absoluto do Dente",
      "Limpeza e Modelagem dos Canais (Mecanizada)",
      "Obturação Tridimensional e Restauração"
    ]
  },
  protese: {
    hero: {
      title: "Prótese Protocolo",
      subtitle: "Sua dentadura fixa e segura.",
      desc: "A solução definitiva para quem usa dentadura e deseja dentes fixos, estética natural e o prazer de comer sem insegurança.",
      image: "/protese.jpg"
    },
    whatIs: "A Prótese Protocolo é uma solução de reabilitação total fixa sobre implantes. Diferente da dentadura comum, ela não possui o 'céu da boca' e é fixada por parafusos sobre 4 ou mais implantes, garantindo estabilidade total.",
    why: [
      { t: "Firmeza Total", d: "Não escorrega nem cai ao falar ou comer." },
      { t: "Paladar Livre", d: "Sem o céu da boca, você sente o sabor real dos alimentos." },
      { t: "Estética Premium", d: "Dentes desenhados para um sorriso natural e harmônico." },
      { t: "Autoestima", d: "Sinta-se seguro em qualquer situação social." }
    ],
    process: [
      "Instalação dos Implantes (Cirurgia Guiada)",
      "Moldagem ou Escaneamento de Precisão",
      "Provas Estéticas e de Mastigação",
      "Instalação da Prótese Protocolo",
      "Ajustes Hemisféricos e Orientações"
    ]
  },
  apneia: {
    hero: {
      title: "Apneia do Sono",
      subtitle: "Durma melhor, viva mais.",
      desc: "Tratamento do ronco e apneia leve com aparelhos intraorais modernos, garantindo noites de sono reparador e mais energia no dia a dia.",
      image: "/apneia.jpg"
    },
    whatIs: "O tratamento da apneia e ronco com aparelhos intraorais consiste no uso de um dispositivo personalizado que posiciona a mandíbula levemente para frente, mantendo as vias aéreas abertas durante o sono.",
    why: [
      { t: "Silêncio", d: "Redução drástica ou eliminação total do ronco." },
      { t: "Saúde", d: "Melhora a oxigenação e reduz riscos cardíacos." },
      { t: "Disposição", d: "Acorde descansado e com foco total." },
      { t: "Conforto", d: "Aparelho portátil, leve e de fácil adaptação." }
    ],
    process: [
      "Avaliação Clínica e Análise de Polissonografia",
      "Escaneamento 3D das Arcadas",
      "Confecção do Aparelho Personalizado",
      "Entrega e Ajuste do Dispositivo",
      "Acompanhamento da Melhora do Sono"
    ]
  },
  atm: {
    hero: {
      title: "Disfunção da ATM",
      subtitle: "Alívio para dores e tensões faciais.",
      desc: "Diagnóstico e tratamento de dores na face, estalos ao abrir a boca e bruxismo, devolvendo o bem-estar e a qualidade de vida.",
      image: "/atm.jpg"
    },
    whatIs: "A Disfunção Temporomandibular (DTM) afeta a articulação que liga a mandíbula ao crânio. O tratamento visa aliviar dores de cabeça, tensões musculares e proteger os dentes contra o bruxismo.",
    why: [
      { t: "Sem Dores", d: "Redução de enxaquecas e dores orofaciais." },
      { t: "Proteção", d: "Evita o desgaste excessivo e quebra de dentes." },
      { t: "Mobilidade", d: "Melhora a abertura e fechamento da boca." },
      { t: "Equilíbrio", d: "Tratamento multidisciplinar para alívio muscular." }
    ],
    process: [
      "Exame Clínico e Palpação Muscular",
      "Moldagem para Placas Miorrelaxantes",
      "Terapias de Alívio (Laser/TENS)",
      "Ajuste Oclusal e Orientação Postural",
      "Monitoramento do Controle do Bruxismo"
    ]
  },
  cirurgia: {
    hero: {
      title: "Cirurgia Odontológica",
      subtitle: "Procedimentos seguros e minimamente invasivos.",
      desc: "Extrações de sisos, cirurgias pré-protéticas e pequenos procedimentos realizados com técnicas avançadas para um pós-operatório rápido.",
      image: "/cirurgia.jpg"
    },
    whatIs: "As cirurgias odontológicas envolvem procedimentos como a remoção de dentes inclusos (sisos), frenectomias e cirurgias de tecidos moles ou ósseos necessárias para a saúde bucal ou preparação para próteses.",
    why: [
      { t: "Sem Dor", d: "Uso de anestésicos modernos e sedação se necessário." },
      { t: "Rapidez", d: "Técnicas que preservam o tecido e aceleram a cura." },
      { t: "Segurança", d: "Ambiente estéril e monitorado para sua proteção." },
      { t: "Resultado", d: "Resolve problemas de espaço e infecções focais." }
    ],
    process: [
      "Consulta e Análise de Exames de Imagem",
      "Planejamento Pré-Operatório",
      "Realização da Cirurgia (Técnica Invasiva Mínima)",
      "Prescrição Medicamentosa de Conforto",
      "Remoção de Pontos e Avaliação Final"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData[slug as keyof typeof treatmentsData];
  if (!data) return { title: "Tratamento Não Encontrado" };
  
  return { 
    title: data.hero.title,
    description: data.hero.desc,
    openGraph: {
      title: `${data.hero.title} | Quality Odontologia`,
      description: data.hero.desc,
      url: `https://qualityodontologia.com.br/${slug}`,
      images: [
        {
          url: data.hero.image || "/hero-clinic.png",
          width: 800,
          height: 600,
          alt: data.hero.title,
        }
      ]
    }
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData[slug as keyof typeof treatmentsData];

  if (!data) {
    return notFound();
  }

  return (
    <>
      <Header />
      
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-[#111] min-h-[70vh] flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.hero.image} alt={data.hero.title} fill className="object-cover opacity-30 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Badge className="bg-[#90cf8e]/15 text-[#c8e9c7] border-0 text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full">
            Especialidade
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 max-w-2xl">
            {data.hero.title}
          </h1>
          <p className="text-[#90cf8e] text-2xl font-bold mb-6">{data.hero.subtitle}</p>
          <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-xl">
            {data.hero.desc}
          </p>
          <a 
            href={WA_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap h-11 px-8 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
          >
            <WaIcon /> Agendar Avaliação
          </a>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#90cf8e]/10 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#90cf8e]/5 rounded-[40%] blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#eaf6ea] text-[#5aab58] border-0 text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full">
                O que é
              </Badge>
              <h2 className="text-4xl font-black mb-6">Compreendendo a <span className="text-[#90cf8e]">{data.hero.title}</span></h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">
                {data.whatIs}
              </p>
              <a 
                href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap h-11 px-8 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl shadow-[#90cf8e]/30 hover:scale-105 transition-all"
              >
                <WaIcon /> Falar com Especialista
              </a>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80">
              <Image src={data.hero.image} alt={data.hero.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ───────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-[#111]">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1920" alt="Estrutura Odontológica" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#111]/90 to-[#111]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-[#90cf8e]/15 text-[#c8e9c7] border-0 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full">
              Benefícios
            </Badge>
            <h2 className="text-4xl font-black text-white">Por que fazer esse tratamento?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {data.why.map((item, i) => (
              <Card key={i} className="group border-none bg-white/5 backdrop-blur-md shadow-xl hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                <CardContent className="p-7">
                  <CheckCircle2 className="w-8 h-8 text-[#90cf8e] mb-4" />
                  <CardTitle className="text-lg mb-3 font-bold text-white">{item.t}</CardTitle>
                  <p className="text-white/60 text-sm leading-relaxed">{item.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <a 
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full gap-2 shadow-xl hover:scale-105 transition-all"
            >
              <WaIcon /> Tirar Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#90cf8e]/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black">Como funciona o <span className="text-[#90cf8e]">Processo</span>?</h2>
            <p className="text-gray-500 mt-4">Etapas claras e transparentes para a sua segurança e tranquilidade.</p>
          </div>
          <div className="space-y-6">
            {data.process.map((step, i) => (
              <div key={i} className="flex gap-6 items-center bg-[#fcfcfc] border border-gray-100 p-6 rounded-2xl shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#eaf6ea] text-[#5aab58] font-black text-xl flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap h-11 px-10 bg-[#111] hover:bg-black text-white font-bold rounded-full gap-2 shadow-xl hover:scale-105 transition-all"
            >
              <WaIcon /> Iniciar Meu Tratamento
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
