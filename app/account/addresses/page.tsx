import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function AddressesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl text-brand-dark">Saved Addresses</h1>
        <button className="bg-brand-dark text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center gap-2 cursor-pointer">
          <FiPlus /> Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Address 1 (Default) */}
        <div className="bg-white p-6 rounded shadow-sm border border-brand-accent relative group">
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 text-gray-400 hover:text-brand-dark cursor-pointer"><FiEdit2 /></button>
          </div>
          <span className="bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block">
            DEFAULT
          </span>
          <div className="text-sm text-text-muted leading-relaxed">
            <p className="font-bold text-brand-dark text-lg mb-1">Tanvir Hassan</p>
            <p>House 42, Road 12, Block B</p>
            <p>Banani, Dhaka - 1213</p>
            <p>Bangladesh</p>
            <p className="mt-3 font-bold text-brand-dark">01711-000000</p>
          </div>
        </div>

        {/* Address 2 */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 relative group">
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
             <button className="p-2 text-gray-400 hover:text-brand-dark cursor-pointer"><FiEdit2 /></button>
             <button className="p-2 text-gray-400 hover:text-red-500 cursor-pointer"><FiTrash2 /></button>
          </div>
          <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block">
            OFFICE
          </span>
          <div className="text-sm text-text-muted leading-relaxed">
            <p className="font-bold text-brand-dark text-lg mb-1">Tanvir Hassan</p>
            <p>Level 12, Glass Tower, Gulshan 1</p>
            <p>Dhaka - 1212</p>
            <p>Bangladesh</p>
            <p className="mt-3 font-bold text-brand-dark">01711-000000</p>
          </div>
        </div>

      </div>
    </div>
  );
}
