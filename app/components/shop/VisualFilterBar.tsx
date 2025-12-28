import { FiGrid, FiList, FiFilter } from "react-icons/fi";

export default function VisualFilterBar() {
  const filters = [
    { id: 'all', label: 'View All' },
    { id: 'briefs', label: 'Briefs' },
    { id: 'trunks', label: 'Trunks' },
    { id: 'boxers', label: 'Boxers' },
    { id: 'vests', label: 'Vests' },
    { id: 'sets', label: 'Value Sets' },
  ];

  return (
    <div className="sticky top-[64px] z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* Horizontal Scroll Filters */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar flex-1 mr-8">
          {filters.map((filter, idx) => (
            <button
              key={filter.id}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer whitespace-nowrap ${
                idx === 0
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'bg-white text-text-muted border-gray-200 hover:border-brand-accent hover:text-brand-accent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-2 border-l border-gray-100 pl-6">
          <button className="flex items-center gap-2 text-xs font-bold uppercase text-brand-dark hover:text-brand-accent transition-colors cursor-pointer">
            <FiFilter /> Filter
          </button>
          <div className="flex gap-1 ml-4">
            <button className="p-2 text-brand-dark hover:bg-gray-100 rounded cursor-pointer">
              <FiGrid />
            </button>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded cursor-pointer">
              <FiList />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
