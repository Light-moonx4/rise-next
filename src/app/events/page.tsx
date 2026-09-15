import Link from "next/link";
import EventsAside from "@/components/events/EventsAside";
import { eventsData } from "@/data/events";

interface EventsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const { category } = await searchParams;

  const displayList =
    category && category !== "all"
      ? eventsData.filter((event) => event.category === category)
      : eventsData;

  return (
    <div className="mx-auto max-w-6xl p-6 flex flex-col md:flex-row gap-6">
      <EventsAside activeCategory={category ?? "all"} />

      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Lista de Eventos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Selecciona un evento para ver más información y adquirir entradas.
          </p>
        </div>

        {displayList.length === 0 ? (
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No hay eventos registrados para esta categoría.
            </p>
            <Link href="/events" className="text-blue-500 hover:underline text-sm">
              &larr; Ver todos los eventos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayList.map((event) => (
              <div
                key={event.id}
                className="flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                    {event.category}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.date}</p>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {event.description}
                  </p>
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                    📍 {event.location}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end">
                  <Link
                    href={`/events/${event.id}`}
                    className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                  >
                    Ver Detalle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link href="/" className="text-sm text-blue-500 hover:underline">
            &larr; Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
