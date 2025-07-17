import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Server, Database, Smartphone, ChevronDown, Menu, X, MapPin, Calendar, Award } from 'lucide-react';
import barbarShop from '../assets/barber_shop.png'
import invRocket from '../assets/inv_rocket_1.png'
import yourStock from '../assets/your_stock.png'
import banking from '../assets/banking.png'
import cloudDrive from '../assets/cloud_drive.png'
const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState({});

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    //  resume download
    const handleResumeDownload = () => {

        const link = document.createElement('a');
        link.href = '/aditya_resume.pdf';
        link.download = 'AdityaSwain_Resume.pdf';
        link.click();
    };

    //  email functionality
    const handleEmailClick = () => {
        window.location.href = 'mailto:adityaswain817@gmail.com?subject=Hello!&body=Hi, I found your portfolio and would like to connect.';
    };

    const skills = {
        frontend: ['React', 'JavaScript', 'JQuery', 'CSS3', 'HTML5', 'Tailwind CSS', 'Bootstrap5'],
        backend: ['Java', 'Spring Boot', 'Python', 'Django Rest Framework', 'REST APIs',],
        database: ['MySQL', 'PostgreSQL', 'MongoDB',],
        tools: ['Git', 'VS Code', 'Eclipse', 'IntelliJ IDEA', 'Postman',]
    };

    const projects = [
        {
            title: 'Invoice Rocket',
            description: 'A full-stack application where people can manage & track  their business invoices.',
            technologies: ['React.js', 'Django', 'MySQL', 'AG-Grid', 'Recharts', 'Material-UI', 'Tailwind CSS'],
            github: '#',
            live: 'https://invoice-rocket.blogswrite.com',
            image: invRocket
        },
        {
            title: 'Cloud Drive App',
            description: 'A full-stack cloud-based application that allows users to seamlessly connect and manage multiple cloud storage accounts (Google Drive, Dropbox, OneDrive) from a single unified interface.',
            technologies: ['React.js','Spring Boot', 'Django', 'MySQL', 'Material-UI','Google Drive API','Dropbox API' ],
            github: 'https://github.com/Aditya-Swain/cloud-drive-frontend',
            live: '#',
            image: cloudDrive
        },
        {
            title: 'Stock Management & Recovery Calculation App',
            description: 'A stock management tool with real-time stock values in graphical interface and recovery calculation features.',
            technologies: ['React.js', 'Django', 'Postgresql', 'Material-UI', 'AG-Grid', 'Socket.io', 'Recharts'],
            github: '#',
            live: '#',
            image: yourStock
        },
        {
            title: 'Online Banking System',
            description: 'An online banking system that allows users to manage accounts, view transaction history, and perform basic banking operations through a user-friendly interface.',
            technologies: ['Spring Boot', 'CSS3', 'JSP', 'Bootstrap', 'MySQL'],
            github: 'https://github.com/Aditya-Swain/online_banking',
            live: '#',
            image: banking
        },
        {
            title: 'Barber Shop',
            description: 'A responsive website for barber shop.',
            technologies: ['HTML5', 'JavaScript', , 'CSS3'],
            github: 'https://github.com/Aditya-Swain/Barber_shop_',
            live: 'https://barbershopgg.netlify.app/',
            image: barbarShop
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            &lt;Aditya /&gt;
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="hover:text-cyan-400 transition-colors duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/90 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors duration-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                <div className="text-center z-10 px-4 py-14">
                    <div className="mb-8 mt-8">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 mb-6 animate-pulse hover:animate-bounce transition-all duration-300">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center shadow-2xl">
                                <Code size={48} className="text-cyan-400 drop-shadow-lg" />
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                                    Hi, I'm{" "}
                                </span>
                                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                                    Aditya Swain
                                </span>
                            </h1>

                            <div className="inline-block">
                                <p className="text-xl md:text-2xl text-gray-300 mb-2 font-medium">
                                    Software Developer | AI Entusiast | Problem Solver
                                </p>
                                <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transform scale-x-0 animate-pulse"></div>
                            </div>

                            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Passionate about creating{" "}
                                <span className="text-cyan-400 font-semibold">innovative</span>{" "}
                                web solutions that make a difference
                            </p>

                            <div className="flex justify-center space-x-2 mt-6">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            onClick={handleEmailClick}
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Get In Touch
                        </button>
                        <button
                            onClick={handleResumeDownload}
                            className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download Resume
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/Aditya-Swain" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-swain-647563289/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:adityaswain817@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>


            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            About Me
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">My Journey</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    I'm a passionate Software Developer Trainee with one year of hands-on experience in building modern web applications.
                                    My journey in tech began with curiosity about how websites work, and has evolved into a deep love for creating
                                    user-friendly, efficient solutions.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    During my trainee period, I've worked on various projects ranging from simple static websites to complex
                                    full-stack applications. I enjoy the problem-solving aspect of programming and am always eager to learn
                                    new technologies and best practices.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-sm bg-slate-800 px-3 py-2 rounded-full">
                                        <MapPin size={16} className="text-cyan-400" />
                                        <span>Bhubaneswar ,Odisha</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm bg-slate-800 px-3 py-2 rounded-full">
                                        <Calendar size={16} className="text-cyan-400" />
                                        <span>1+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm bg-slate-800 px-3 py-2 rounded-full">
                                        <Award size={16} className="text-cyan-400" />
                                        <span>Trainee Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
                                <h4 className="text-xl font-semibold mb-4 text-purple-400">What I Bring</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Strong foundation in modern web technologies</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Experience with full-stack development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Collaborative mindset and eagerness to learn</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Problem-solving approach to development challenges</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 bg-slate-800/30">
                <div className="max-w-6xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Skills & Technologies
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <Code className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                                    <h3 className="text-xl font-semibold">Frontend</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.frontend.map((skill, index) => (
                                        <div key={index} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-purple-400/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <Server className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                                    <h3 className="text-xl font-semibold">Backend</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.backend.map((skill, index) => (
                                        <div key={index} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-green-400/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <Database className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                                    <h3 className="text-xl font-semibold">Database</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.database.map((skill, index) => (
                                        <div key={index} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <Smartphone className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                                    <h3 className="text-xl font-semibold">Tools</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.tools.map((skill, index) => (
                                        <div key={index} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-slate-700/50 px-2 py-1 rounded text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                            >
                                                <Github size={16} />
                                                Code
                                            </a>
                                            <a
                                                href={project.live}
                                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>

                        <div className="text-center mb-12">
                            <p className="text-xl text-gray-300 mb-8">
                                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button
                                    onClick={handleEmailClick}
                                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                                >
                                    <Mail size={20} />
                                    Send Me an Email
                                </button>

                                <button
                                    onClick={handleResumeDownload}
                                    className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                                >
                                    <Download size={20} />
                                    Download My Resume
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                                    <a href='mailto:adityaswain817@gmail.com' className="text-gray-400">adityaswain817@gmail.com</a>
                                </div>
                                <div>
                                    <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                                    <a href='https://github.com/Aditya-Swain' className="text-gray-400">https://github.com/Aditya-Swain</a>
                                </div>
                                <div>
                                    <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                                    <a href='https://www.linkedin.com/in/aditya-swain-647563289/' className="text-gray-400">https://www.linkedin.com/in/aditya-swain-647563289/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center border-t border-slate-700">
                <p className="text-gray-400">
                    © 2025 Aditya Swain.All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Portfolio;