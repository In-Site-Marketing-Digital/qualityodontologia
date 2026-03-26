"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function TrustIndexWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Attempt to re-render if script already there
    const timer = setTimeout(() => {
      try {
        if ((window as any).TI && (window as any).TI.render) {
          (window as any).TI.render();
        }
      } catch (e) {}
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="min-h-[400px]" />;

  return (
    <div className="trustindex-container w-full min-h-[400px] flex items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
      <Script 
        id="trustindex-script-inline"
        src="https://cdn.trustindex.io/loader.js?3905510683a81996f1961d16c12"
        strategy="afterInteractive"
      />
      
      {/* Official TrustIndex Placeholder */}
      <div 
        className="ti-widget" 
        data-layout-id="13" 
        data-layout-category="slider"
        data-pid="3905510683a81996f1961d16c12" 
        data-trustindex-widget="true"
        data-no-translation="true"
        data-language="pt"
      >
        <div className="text-center py-20 text-gray-400">
          <p className="animate-pulse">Carregando avaliações oficiais do Google...</p>
        </div>
      </div>
    </div>
  );
}
