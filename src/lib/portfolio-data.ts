export type Project = {
  id: string;
  title: string;
  category: "Commercial" | "Music" | "Long-form" | "Social";
  description: string;
  role: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Neon Nights — Brand Film",
    category: "Commercial",
    description: "30s hero cut, sound design polish, and color grade for a product launch.",
    role: "Lead editor",
    gradient: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "2",
    title: "Atlas — Music Video",
    category: "Music",
    description: "Pacing, VFX timing passes, and narrative structure across performance and B-roll.",
    role: "Offline + online",
    gradient: "from-indigo-600 to-cyan-500",
  },
  {
    id: "3",
    title: "Creator Weekly — Ep. 142",
    category: "Long-form",
    description: "45-minute doc-style episode: multicam sync, chapter cards, and retention pacing.",
    role: "Long-form editor",
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    id: "4",
    title: "Shorts Pack — Q4",
    category: "Social",
    description: "12 vertical cuts from one shoot day with hooks and on-screen captions.",
    role: "Short-form",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    id: "5",
    title: "SaaS Explainer",
    category: "Commercial",
    description: "90-second explainer with motion graphics handoff and VO alignment.",
    role: "Editor",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "6",
    title: "Festival Trailer",
    category: "Music",
    description: "Teaser cut with rhythm-led edits and festival title treatment timing.",
    role: "Trailer editor",
    gradient: "from-purple-800 to-pink-600",
  },
];

export const PROJECT_CATEGORIES = [
  "all",
  "Commercial",
  "Music",
  "Long-form",
  "Social",
] as const;
