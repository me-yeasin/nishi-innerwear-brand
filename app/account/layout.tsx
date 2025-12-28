"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiPackage, FiMapPin, FiUser, FiLogOut } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/account", icon: FiGrid },
    { name: "My Orders", href: "/account/orders", icon: FiPackage },
    { name: "Addresses", href: "/account/addresses", icon: FiMapPin },
    { name: "Account Details", href: "/account/profile", icon: FiUser },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      <div className="flex-grow max-w-[1300px] mx-auto w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100 bg-brand-dark text-white">
                <p className="text-xs opacity-70 uppercase tracking-widest mb-1">Welcome</p>
                <h2 className="font-serif text-xl">Tanvir Hassan</h2>
              </div>
              <nav className="p-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded transition-colors mb-1 ${
                        isActive
                          ? "bg-brand-accent/10 text-brand-accent"
                          : "text-text-muted hover:bg-gray-50 hover:text-brand-dark"
                      }`}
                    >
                      <item.icon className={isActive ? "text-brand-accent" : "text-gray-400"} />
                      {item.name}
                    </Link>
                  );
                })}
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 rounded transition-colors mt-2 cursor-pointer">
                  <FiLogOut /> Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
             {children}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
