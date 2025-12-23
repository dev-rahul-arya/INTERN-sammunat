const Services = () => {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: '24/7 Support',
            description: "We're always available to assist you with any queries or technical issues, ensuring seamless service and uninterrupted support.",
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Secure Payments',
            description: 'We prioritize your security with encrypted transactions, ensuring safe and hassle-free payments every time.',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
            ),
            title: 'Progress Reports',
            description: 'We keep you informed with regular updates, ensuring transparency at every stage. Stay updated on developments and revisions.',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            title: 'Innovation Hub',
            description: 'We stay updated with the latest trends and technologies, ensuring cutting-edge solutions for your success.',
            color: 'from-orange-500 to-red-500',
        },
    ];

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">What We Do?</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        The service we offer is specifically
                        <br />
                        <span className="text-gradient">designed to meet your needs</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group glass rounded-2xl p-6 hover-lift cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href="#"
                                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors group/link"
                            >
                                <span>Learn More</span>
                                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
