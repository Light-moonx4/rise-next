import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-4xl p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold capitalize">Categoría: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Mostrando todos los eventos relacionados con la categoría: <strong>{slug}</strong>.
      </p>

      <div className="mt-6">
        <Link href="/categories" className="text-blue-500 hover:underline text-sm">
          &larr; Volver a Categorías
        </Link>
      </div>
    </div>
  );
}