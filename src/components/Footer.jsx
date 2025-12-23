const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Web Development', href: '#' },
            { name: 'App Development', href: '#' },
            { name: 'Video Editing', href: '#' },
            { name: 'SEO Services', href: '#' },
            { name: 'Digital Marketing', href: '#' },
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Contact', href: '#contact' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: 'X' },
        { name: 'Facebook', icon: 'f' },
        { name: 'Instagram', icon: 'IG' },
        { name: 'LinkedIn', icon: 'in' },
        { name: 'YouTube', icon: 'YT' },
    ];

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">SAMMUNAT</span>
                        </a>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            An USA based multinational IT company that specializes in digital products & services.
                            We craft project-specific solutions with expertise.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <span className="text-xs font-bold">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} SAMMUNAT LLC. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <span>Made with</span>
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>by Sammunat Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
