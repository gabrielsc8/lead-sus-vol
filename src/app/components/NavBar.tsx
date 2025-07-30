"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // 1. Importado o Link do Next.js

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/admin/leads", label: "Dashboard" },
    { href: "/formulario", label: "Formulário" },
    { href: "/admin/add", label: "Adicionar Admin" },
  ];

  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent";
  const gradientHoverStyle = "hover:bg-gradient-to-r from-[#f34906] to-[#fb349f] hover:bg-clip-text hover:text-transparent transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#0e142d] border-b border-gray-800 text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-white">
              <Image className="w-auto h-8" src="/logo2.png" width={120} height={52} alt="Logo" />
            </span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <svg className={`shrink-0 size-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </>
                )}
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Menu para mobile e desktop */}
        <div className={`overflow-hidden transition-all duration-300 basis-full grow sm:block ${open ? 'max-h-screen mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)} // Fecha o menu ao clicar em um link no mobile
                className={`font-semibold focus:outline-none ${
                  pathname === link.href
                    ? `font-bold ${gradientTextStyle}`
                    : `text-gray-400 ${gradientHoverStyle}`
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}