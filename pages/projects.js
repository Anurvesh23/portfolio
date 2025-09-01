// A stylish gallery for your projects.

import { motion } from 'framer-motion';

const projects = [
    {
      title: "Resygo",
      description: "A user-friendly platform that makes booking a breeze. Find the perfect spot, check availability, and secure your reservation with just a few clicks.",
      link: "https://resygo.com",
      tags: ["Web App", "Booking System", "Next.js"]
    },
    {
      title: "Rex AI",
      description: "An AI-powered resume management platform that helps you analyze and optimize your resume. It also helps you train for upcoming interviews by providing mock interviews.",
      link: null,
      tags: ["AI", "SaaS", "Career Tool", "React"]
    },
    {
      title: "Wise Wealth",
      description: "An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.",
      link: "https://wise-wealth-opal.vercel.app",
      tags: ["FinTech", "AI", "Analytics", "Vercel"]
    },
    {
      title: "WebRTC",
      description: "A real-time communication application for video and audio streaming, built with WebRTC for peer-to-peer connections.",
      link: "https://webrtc-vlm.netlify.app", 
      tags: ["WebRTC", "Real-time Communication", "Video Streaming", "JavaScript"]
    }
];

const pageVariantsProjects = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageTransitionProjects = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const Projects = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariantsProjects}
            transition={pageTransitionProjects}
            className="container mx-auto px-6 py-24 pt-32"
        >
            <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:-translate-y-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                        <p className="text-slate-400 mb-4 h-28">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-cyan-400/10 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                         {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-cyan-400 hover:text-cyan-200 transition-colors">
                                View Project &rarr;
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;