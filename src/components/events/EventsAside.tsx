// src/components/EventsAside.tsx
import Link from "next/link";

const eventCategories = [
  { id: "all", name: "Todos los Eventos", path: "/events/all" },
  { id: "music", name: "🎵 Música", path: "/events/music" },
  { id: "games", name: "🎮 Videojuegos", path: "/events/games" },
  { id: "theatre", name: "🎭 Teatro", path: "/events/theatre" },
  { id: "football", name: "⚽ Fútbol", path: "/events/football" },
];

export default function EventsAside() {
  return (
    // Mantén tus clases de diseño aquí
    <aside className="w-full md:w-64 p-4 bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold text-white mb-4">📅 Filtrar Eventos</h3>
      <ul className="space-y-2 text-sm">
        {eventCategories.map((cat) => (
          <li key={cat.id}>
            <Link 
              href={cat.path} 
              className="block p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-blue-400 transition-colors"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}