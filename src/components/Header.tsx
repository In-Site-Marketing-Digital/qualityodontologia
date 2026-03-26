"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? "/logo-preto.png" : "/logo-branco.png"}
              alt="Quality Odontologia"
              width={160}
              height={48}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "A Clínica", href: "#sobre" },
              { label: "Tratamentos", href: "#tratamentos" },
              { label: "Avaliações", href: "#avaliacoes" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:opacity-80 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/5500000000000" target="_blank" rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center whitespace-nowrap bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full px-6 h-10 gap-2 shadow-lg shadow-[#90cf8e]/30 transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Agendar Consulta
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className={scrolled ? "text-gray-800" : "text-white"} />
              ) : (
                <Menu className={scrolled ? "text-gray-800" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {[
            { label: "A Clínica", href: "#sobre" },
            { label: "Tratamentos", href: "#tratamentos" },
            { label: "Avaliações", href: "#avaliacoes" },
            { label: "Contato", href: "#contato" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-gray-800 hover:text-[#5aab58]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap bg-[#90cf8e] hover:bg-[#5aab58] text-white font-bold rounded-full h-10 px-4 gap-2 mt-2"
          >
            Agendar via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
