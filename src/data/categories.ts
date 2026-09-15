export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
}

export const categoriesData: CategoryItem[] = [
  { id: "all", name: "Todos los Eventos", slug: "all" },
  { id: "music", name: "Música", slug: "music" },
  { id: "games", name: "Videojuegos", slug: "games" },
  { id: "theatre", name: "Teatro", slug: "theatre" },
  { id: "football", name: "Fútbol", slug: "football" },
];