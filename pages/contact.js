import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key from .env.local
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // These keys MUST match your EmailJS template variable names
      const templateParams = {
        from_name: formData.name,     // {{from_name}} in EmailJS template
        reply_to: formData.email,     // {{reply_to}} in EmailJS template (set as Reply-To)
        subject: formData.subject,    // {{subject}}
        message: formData.message,    // {{message}}
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Email error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Feel free to reach out if you'd like to collaborate or just want to say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:munugalaanurveshreddy@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    munugalaanurveshreddy@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaPhone className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+919392818987" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    +91 9392818987
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-slate-300">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/Anurvesh23" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/anurveshreddy-munugala-875361310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://twitter.com/anurveshreddy" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors">
                <FaTwitter size={28} />
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Availability</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Status:</span>
                <span className="text-green-400 font-medium">Available for opportunities</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Response Time:</span>
                <span className="text-white">Within 24 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Preferred Contact:</span>
                <span className="text-white">Email</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
