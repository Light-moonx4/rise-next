import Link from "next/link";
import ThemeToggleButton from "../ui/ThemeToggleButtom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
        Al Catálogo
      </Link>
      
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-blue-500 text-gray-700 dark:text-gray-300 text-sm font-medium">Inicio</Link>
        <Link href="/events" className="hover:text-blue-500 text-gray-700 dark:text-gray-300 text-sm font-medium">Eventos</Link>
        <Link href="/categories" className="hover:text-blue-500 text-gray-700 dark:text-gray-300 text-sm font-medium">Categorías</Link>
        
        <ThemeToggleButton />
      </div>
    </nav>
  );
}