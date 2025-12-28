export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="w-16 h-16 border-4 border-gray-100 border-t-brand-accent rounded-full animate-spin mb-4"></div>
        <div className="font-serif text-brand-dark font-bold tracking-widest animate-pulse">
          INNERWARE
        </div>
      </div>
    </div>
  );
}
