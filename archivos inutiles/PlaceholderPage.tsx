export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#F7F6F2] pt-24">
      <h1 className="text-4xl font-serif text-[#2C5282]">{title}</h1>
      <p className="mt-4 text-[#8a714a]">Página en construcción</p>
    </div>
  );
}
