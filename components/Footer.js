// A simple, clean footer for all pages.

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="container mx-auto px-6 py-8 text-center text-slate-500">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://github.com/Anurvesh23" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                </a>
                            <a href="https://www.linkedin.com/in/anurveshreddy-munugala-875361310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
            </a>
                <a href="mailto:munugalaanurveshreddy@gmail.com"
                   className="text-slate-400 hover:text-white transition-colors">
                    <FaEnvelope size={20} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Munugala Anurvesh Reddy. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
