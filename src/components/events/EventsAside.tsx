import Link from "next/link";
import { categoriesData } from "@/data/categories";

const categoryIcons: Record<string, string> = {
  all: "📅",
  music: "🎵",
  games: "🎮",
  theatre: "🎭",
  football: "⚽",
};

interface EventsAsideProps {
  activeCategory?: string;
}

export default function EventsAside({ activeCategory = "all" }: EventsAsideProps) {
  return (
    <aside className="w-full md:w-64 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📅 Filtrar Eventos</h3>
      <ul className="space-y-2 text-sm">
        {categoriesData.map((cat) => {
          const isActive = cat.slug === activeCategory;
          return (
            <li key={cat.id}>
              <Link
                href={cat.slug === "all" ? "/events" : `/events?category=${cat.slug}`}
                className={`block p-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
                }`}
              >
                {categoryIcons[cat.slug] ?? "•"} {cat.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}