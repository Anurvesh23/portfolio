// About page with comprehensive portfolio information

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const skills = [
  { name: "Next.js", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "PHP", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "R", level: 70 },
  { name: "AWS", level: 85 },
  { name: "EC2/VPC", level: 80 },
  { name: "S3/RDS", level: 80 },
  { name: "CloudWatch", level: 75 },
  { name: "Machine Learning", level: 80 },
  { name: "BERT/NLP", level: 75 }
];

const experience = [
  {
    title: "Event Coordinator",
    company: "Ethical Hacking Workshop & Hackathon",
    period: "2023 - Present",
    description: "Coordinated a two-day hands-on workshop on Ethical Hacking in Data Security, involving expert sessions, lab-based demonstrations and participant engagement activities."
  },
  {
    title: "Student Developer",
    company: "Personal Projects",
    period: "2022 - Present",
    description: "Developed multiple full-stack web applications including Resygo (booking platform), Rex AI (resume management), and Wise Wealth (financial management)."
  },
  {
    title: "Workshop Attendee",
    company: "Build with AI Global Event",
    period: "2023",
    description: "Attended workshop organized by Datavalley.ai with the collaboration of Google for Developers, gaining hands-on experience with AI technologies."
  }
];

const education = [
  {
    degree: "Bachelor of Technology",
    school: "Sreyas Institute of Engineering and Technology",
    period: "Expected June 2026",
    description: "Major in Computer Science; Minor in Data Science. Cumulative GPA: 7.0. Relevant Coursework: Data Science, Software Engineering, Operating Systems, Algorithms, Artificial Intelligence"
  },
  {
    degree: "Telangana State Board of Intermediate Education",
    school: "Sri Chaitanya Junior College",
    period: "Jul 2020 - April 2022",
    description: "T.S.B.I.E"
  }
];

const certifications = [
  "AWS Solution Architect Certification",
  "Certificate of Excellence in Java",
  "Certificate of Excellence in Database Management System"
];

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

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Anurvesh.pdf';
    link.download = 'Munugala_Anurvesh_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-6 py-24 pt-32"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Aspiring Cloud and Web Developer with hands-on experience in AWS cloud services, full-stack web development, and database 
          management. Skilled in building responsive web applications and deploying them on scalable cloud infrastructure.
        </p>
        <button
          onClick={handleResumeDownload}
          className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </button>
      </div>

      {/* Personal Info & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <span className="text-slate-400">Name:</span>
              <span className="text-white ml-2">Munugala Anurvesh Reddy</span>
            </div>
            <div>
              <span className="text-slate-400">Email:</span>
              <span className="text-white ml-2">munugalaanurveshreddy@gmail.com</span>
            </div>
            <div>
              <span className="text-slate-400">Location:</span>
              <span className="text-white ml-2">Hyderabad, India</span>
            </div>
            <div>
              <span className="text-slate-400">Status:</span>
              <span className="text-green-400 ml-2">Available for opportunities</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Connect With Me</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/Anurvesh23" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anurveshreddy-munugala-875361310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:munugalaanurveshreddy@gmail.com"
               className="text-slate-400 hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Activities & Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                  <p className="text-white font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-slate-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
              <p className="text-white font-medium mb-2">{edu.school}</p>
              <p className="text-slate-400 text-sm mb-3">{edu.period}</p>
              <p className="text-slate-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center"
            >
              <h3 className="text-lg font-bold text-cyan-400">{cert}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact"
             className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors">
            Get In Touch
          </a>
          <a href="/projects"
             className="px-8 py-3 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-colors">
            View My Work
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
