'use client';

import Link from 'next/link';
import Image from 'next/image';

// `always: true` links show on every screen size.
// The rest are hidden on small screens to avoid crowding.
const links = [
  { label: 'Projects', href: '/#projects', always: true },
  { label: 'Skills', href: '/#skills' },
  { label: 'GitHub', href: '/#github' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Articles', href: '/articles', always: true },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-red-600/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-14">
        {/* Brand — now the single source of logo + name */}
        <Link href="/#home" className="flex items-center gap-2 group" aria-label="Home">
          <Image
            src="/S-Logo/S-Logo.jpg"
            alt="Sheharzad Salahuddin logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="hidden sm:block font-mono text-xs tracking-widest text-red-400 group-hover:text-red-300 transition-colors">
            SHEHARZAD
          </span>
        </Link>

        {/* Links + emphasized Resume CTA */}
        <div className="flex items-center gap-3 md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[0.7rem] md:text-xs tracking-wider text-gray-300 hover:text-red-400 transition-colors uppercase ${
                link.always ? '' : 'hidden md:inline'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/resume" className="btn btn-outline btn-sm">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
