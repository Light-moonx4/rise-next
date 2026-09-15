export interface EventItem {
  id: string;
  title: string;
  category: "music" | "games" | "theatre" | "football";
  date: string;
  location: string;
  description: string;
}

export const eventsData: EventItem[] = [
  // --- VIDEOJUEGOS (Games) ---
  {
    id: "tokyo-game-show-2026",
    title: "Tokyo Game Show 2026",
    category: "games",
    date: "Del 16 al 20 de septiembre de 2026",
    location: "Japón",
    description: "Una de las ferias de videojuegos más grandes del mundo con novedades desde Japón.",
  },
  {
    id: "blizzcon-2026",
    title: "BlizzCon 2026",
    category: "games",
    date: "12 de septiembre de 2026",
    location: "California, EE.UU.",
    description: "Evento enfocado en las franquicias de Blizzard.",
  },
  {
    id: "level-5-vision-2026",
    title: "LEVEL-5 Vision 2026 II",
    category: "games",
    date: "10 de septiembre de 2026",
    location: "Japón (Online)",
    description: "Presentación especial con los próximos lanzamientos de LEVEL-5.",
  },

  // --- MÚSICA (Music) ---
  {
    id: "skillet-louder-than-life",
    title: "Skillet en Louder Than Life 2026",
    category: "music",
    date: "17 de septiembre de 2026",
    location: "Louisville, KY, EE.UU.",
    description: "Presentación en vivo de Skillet.",
  },
  {
    id: "linkin-park-wabash",
    title: "Linkin Park en Concierto",
    category: "music",
    date: "18 de septiembre de 2026",
    location: "Wabash, IN, EE.UU.",
    description: "Gira oficial de Linkin Park en 2026.",
  },
  {
    id: "linkin-park-zurich",
    title: "Linkin Park - Estadio Letzigrund",
    category: "music",
    date: "30 de junio de 2026",
    location: "Estadio Letzigrund (Zúrich, Suiza)",
    description: "Concierto masivo en Europa.",
  },

  // --- TEATRO (Theatre) ---
  {
    id: "jury-experience",
    title: "The Jury Experience: El Robo de los 20 Millones",
    category: "theatre",
    date: "Viernes 25 de septiembre de 2026",
    location: "Teatro Principal",
    description: "Funciones recurrentes hasta el 12 de diciembre de 2026.",
  },
  {
    id: "sabanalarga-vive-teatro",
    title: "Encuentro Regional 'Sabanalarga Vive Teatro'",
    category: "theatre",
    date: "19 de septiembre de 2026",
    location: "Sabanalarga, Atlántico",
    description: "Muestra cultural y artística de teatro regional.",
  },

  // --- FÚTBOL (Football) ---
  {
    id: "champions-league-final",
    title: "Final de la UEFA Champions League 2026",
    category: "football",
    date: "30 de mayo de 2026",
    location: "Estadio por definir, Europa",
    description: "El partido definitivo por la orejona de la Champions League.",
  },
  {
    id: "liga-betplay-final",
    title: "Gran Final Liga BetPlay 2026",
    category: "football",
    date: "21 de junio de 2026",
    location: "Colombia",
    description: "El encuentro estelar para definir al campeón del fútbol profesional.",
  },
];