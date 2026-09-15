// src/app/events/[id]/page.tsx
import Link from "next/link";
import { eventsData } from "@/data/events";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Filtramos los eventos por categoría o por ID específico
  const filteredEvents = eventsData.filter(
    (event) => event.category === id || event.id === id
  );

  const displayList = id === "all" ? eventsData : filteredEvents;

  return (
    <div className="mx-auto max-w-6xl p-6 text-white">
      <h1 className="text-3xl font-bold capitalize mb-2">
        {id === "all" ? "Todos los Eventos" : `Categoría: ${id}`}
      </h1>
      <p className="text-gray-400 mb-6">
        Mostrando todos los eventos relacionados con la categoría: <span className="text-blue-400 font-semibold">{id}</span>.
      </p>

      {displayList.length === 0 ? (
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl text-center">
          <p className="text-gray-400 mb-4">No hay eventos registrados para esta opción.</p>
          <Link href="/events/all" className="text-blue-400 hover:underline text-sm">
            &larr; Ver todos los eventos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayList.map((event) => (
            <div
              key={event.id}
              className="p-5 bg-gray-900 border border-gray-800 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase px-2 py-1 bg-blue-950 text-blue-400 rounded">
                  {event.category}
                </span>
                <p className="text-xs text-gray-400 mt-3">{event.date}</p>
                <h2 className="text-xl font-bold mt-1 text-white">{event.title}</h2>
                <p className="text-sm text-gray-400 mt-2">{event.description}</p>
                <p className="text-xs text-gray-500 mt-3">📍 {event.location}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                <span className="font-bold text-white">
                  {/* Simulamos un precio o estado basado en los datos */}
                  {"price" in event ? (event as any).price : "$35.000"}
                </span>
                <Link
                  href={`/events/detail/${event.id}`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Link href="/events/all" className="text-blue-400 hover:underline text-sm">
          &larr; Volver a Categorías y Eventos
        </Link>
      </div>
    </div>
  );
}