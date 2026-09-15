import Link from "next/link";
import { categoriesData } from "@/data/categories";

export default function CategoriesAside() {
  return (
    <aside className="w-full md:w-64 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        📂 Categorías
      </h3>

      <ul className="space-y-2 text-sm">
        {categoriesData.map((cat) => (
          <li key={cat.id}>
            <Link
              href={cat.slug === "all" ? "/categories" : `/categories/${cat.slug}`}
              className="block p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}