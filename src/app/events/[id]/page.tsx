import Link from "next/link";
import { eventsData } from "@/data/events";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const event = eventsData.find((item) => item.id === id);

  if (!event) {
    return (
      <div className="mx-auto max-w-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Evento no encontrado
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          El evento que buscas no existe o fue eliminado.
        </p>
        <Link href="/events" className="text-blue-500 hover:underline text-sm">
          &larr; Volver a Eventos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
        {event.category}
      </span>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
        {event.title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{event.date}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">📍 {event.location}</p>

      <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
        {event.description}
      </p>

      <div className="mt-8">
        <Link href="/events" className="text-sm text-blue-500 hover:underline">
          &larr; Volver a Eventos
        </Link>
      </div>
    </div>
  );
}
