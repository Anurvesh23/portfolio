// This file is the main entry point for your app.
// It sets up the global layout and page transition animations.

import '../styles/globals.css'; // Make sure to have a globals.css for Tailwind
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <Navbar />
      <AnimatePresence mode="wait">
        <main key={router.route}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
