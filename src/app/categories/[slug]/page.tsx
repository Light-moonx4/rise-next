import Link from "next/link";
import { eventsData } from "@/data/events";
import { categoriesData } from "@/data/categories";

interface CategoryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params;
  const category = categoriesData.find((item) => item.slug === slug);
  const events = eventsData.filter((event) => event.category === slug);

  return (
    <div className="mx-auto max-w-4xl p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold capitalize">
        Categoría: {category?.name ?? slug}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {events.length > 0
          ? `${events.length} evento(s) encontrados en esta categoría.`
          : "No hay eventos registrados en esta categoría todavía."}
      </p>

      {events.length > 0 && (
        <ul className="mt-6 space-y-3">
          {events.map((event) => (
            <li
              key={event.id}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
              <p className="font-semibold">{event.title}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex gap-4">
        <Link href="/categories" className="text-blue-500 hover:underline text-sm">
          &larr; Volver a Categorías
        </Link>
        <Link href={`/events?category=${slug}`} className="text-blue-500 hover:underline text-sm">
          Ver en Eventos &rarr;
        </Link>
      </div>
    </div>
  );
}
