import Link from "next/link";
import  EventsAside  from "@/components/events/EventsAside";
export const sampleEvents = [
  {
    id: "1",
    title: "Concierto Rock Sunset 2026",
    description: "Festival de rock en vivo con bandas nacionales e internacionales.",
    date: "15 de Octubre, 2026",
    location: "Parque Metropolitano",
    price: "$45.000",
  },
  {
    id: "2",
    title: "Hackathon NextGen Tech",
    description: "48 horas de programación, Inteligencia Artificial y networking.",
    date: "05 de Noviembre, 2026",
    location: "Centro de Innovación Ruta N",
    price: "Gratis",
  },
  {
    id: "3",
    title: "Expo Gourmet & Wine Tasting",
    description: "Muestra gastronómica y catas de vinos seleccionados.",
    date: "12 de Noviembre, 2026",
    location: "Espacio Cultural Julio Le Parc",
    price: "$38.000",
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
       <EventsAside />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Lista de Eventos
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Selecciona un evento para ver más información y adquirir entradas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {event.date}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                {event.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {event.description}
              </p>
              <div className="mt-3 text-xs text-gray-500">
                {event.location}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {event.price}
              </span>
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

      <div className="mt-8">
        <Link href="/" className="text-sm text-blue-500 hover:underline">
          &larr; Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
