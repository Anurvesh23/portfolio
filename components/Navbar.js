// A sleek, responsive navigation bar.

import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            AR
          </a>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} legacyBehavior>
              <a
                className={`relative text-lg ${
                  router.pathname === link.path
                    ? 'text-white'
                    : 'text-slate-400'
                } hover:text-white transition-colors duration-300`}
              >
                {link.name}
                {router.pathname === link.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400"></span>
                )}
              </a>
            </Link>
          ))}
        </div>
        <a href="/contact" className="hidden md:inline-block px-4 py-2 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400/10 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
