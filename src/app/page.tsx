import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Bienvenido al Shadow Catálogo
        </h1>
        <div className="flex gap-6 mt-2">
          <Link href="/events" className="text-blue-500 hover:underline">
            Ver Eventos
          </Link>
          <Link href="/categories" className="text-blue-500 hover:underline">
            Ver Categorías
          </Link>
        </div>
      </div>
    </div>
  );
}
