import type { Link } from "@/data/profile";

export default function LinkCard({ title, url }: Link) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-14 w-full items-center justify-center rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] dark:border-zinc-700 dark:bg-zinc-900"
    >
      {title}
    </a>
  );
}
