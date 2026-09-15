import Link from "next/link";

export default function CreateCategoriesButton() {
  return (
    <Link
      href="/admin/categories/create"
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
    >
      Crear Categoría
    </Link>
  );
}