
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Catálogo de Eventos",
  description: "Explora y adquiere entradas para eventos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black text-gray-900 dark:text-white">
        {/* Navbar global */}
        <Navbar />

        {/* Contenido dinámico de las páginas (Home, Events, Categories, etc.) */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}