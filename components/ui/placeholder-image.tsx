type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
  return (
    <div
      className={`flex min-h-56 items-center justify-center border border-blue-500/40 bg-[radial-gradient(circle_at_center,#123464,#020817_65%)] p-6 text-center text-sm font-black uppercase text-white/55 ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
