import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const lufga = localFont({
  src: [
    {
      path: "./fonts/LUFGA-LIGHT.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/LUFGA-REGULAR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LUFGA-MEDIUM.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/LUFGA-BOLD.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qualityodontologia.com.br"),
  title: {
    default: "Quality Odontologia | Clínica Odontológica Premium",
    template: "%s | Quality Odontologia",
  },
  description: "Clínica odontológica especializada com tecnologia de ponta e atendimento humanizado. Implantes, Ortodontia, Estética e muito mais.",
  keywords: ["Dentista", "Clínica Odontológica", "Implantes", "Ortodontia", "Odontopediatria", "Estética Dental", "Lentes de Contato", "Invisalign"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://qualityodontologia.com.br",
    title: "Quality Odontologia | Clínica Odontológica Premium",
    description: "Referência em saúde bucal com tecnologia de ponta e atendimento humanizado.",
    siteName: "Quality Odontologia",
    images: [{
      url: "/hero-clinic.png", // Imagem padrão de compartilhamento
      width: 1200,
      height: 630,
      alt: "Quality Odontologia",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={lufga.variable}>
      <body className="font-sans antialiased">
        {children}
        <script 
          src="https://cdn.trustindex.io/loader.js?3905510683a81996f1961d16c12" 
          defer
          async
        />
      </body>
    </html>
  );
}
