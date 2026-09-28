import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${name} 프로필 사진`}
          className="size-28 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
        />
      ) : (
        <DefaultAvatar />
      )}
      <h1 className="mt-2 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}

function DefaultAvatar() {
  return (
    <div
      role="img"
      aria-label="기본 프로필 사진"
      className="flex size-28 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-zinc-400 ring-1 ring-black/10 dark:bg-zinc-800 dark:text-zinc-600 dark:ring-white/15"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="mt-4 size-24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
      </svg>
    </div>
  );
}
