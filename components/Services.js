// Services component showcasing offered services

import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaMobile, FaDatabase, FaBrain, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} />,
    title: "Web Development",
    description: "Building modern, responsive web applications using React, Next.js, and Node.js with best practices and performance optimization.",
    features: ["React.js", "Next.js", "Node.js", "TypeScript"]
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Solutions",
    description: "AWS cloud infrastructure setup, deployment, and management with scalable architecture and cost optimization.",
    features: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    icon: <FaMobile size={40} />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native with native performance and modern UI/UX design.",
    features: ["React Native", "iOS", "Android", "PWA"]
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Database Design",
    description: "Database architecture, optimization, and management for both SQL and NoSQL databases with data security.",
    features: ["MongoDB", "PostgreSQL", "Redis", "Data Modeling"]
  },
  {
    icon: <FaBrain size={40} />,
    title: "Machine Learning",
    description: "AI/ML solutions including model development, deployment, and integration for intelligent applications.",
    features: ["Python", "TensorFlow", "BERT", "NLP"]
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "DevOps & Security",
    description: "DevOps practices, security implementation, and infrastructure automation for robust applications.",
    features: ["Security", "Automation", "Monitoring", "Testing"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Services I Offer</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I provide comprehensive solutions for modern web and cloud applications, 
            from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="text-cyan-400 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.features.map((feature) => (
                  <span key={feature} className="bg-cyan-400/10 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
