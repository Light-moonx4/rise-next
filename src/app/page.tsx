import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to al catalogo
        </h1>
        <Link href="/events" className="mt-6 text-blue-500 hover:underline">
          View Events
        </Link>
      </div>
    </div>
  );
}
