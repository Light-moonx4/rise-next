import Link from "next/link";
import CategoriesAside from "@/components/categories/CategoriesAside";
import CreateCategoriesButton from "@/components/ui/CreateCategoriesButton";

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 flex flex-col md:flex-row gap-6">
      
      {/* Barra lateral de categorías */}
      <CategoriesAside />

      {/* Contenido principal de la página */}
      <main className="flex-1 flex flex-col justify-between p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Categorías
            </h1>
            <CreateCategoriesButton />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Explora las distintas categorías de eventos usando el panel lateral.
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          <Link href="/" className="text-blue-500 hover:underline text-sm">
            &larr; Volver al Inicio
          </Link>
          <Link href="/events" className="text-blue-500 hover:underline text-sm">
            Ver Eventos &rarr;
          </Link>
        </div>
      </main>

    </div>
  );
}