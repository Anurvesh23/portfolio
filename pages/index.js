// The stunning home page with a 3D animated background.

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Services from '../components/Services';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 5, 2]} />
            <Sphere args={[1, 100, 200]} scale={2.0}>
              <MeshDistortMaterial
                color="#06b6d4"
                attach="material"
                distort={0.5}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
        </div>
        <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Munugala Anurvesh Reddy
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Cloud & Web Developer | Crafting Digital Experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" legacyBehavior>
              <a className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
                View My Work
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="px-8 py-3 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Services Section */}
      <Services />
    </div>
  );
};

export default Home;
