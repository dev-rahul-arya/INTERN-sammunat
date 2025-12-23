const Features = () => {
    const features = [
        {
            title: 'Video Editing',
            highlight: 'Professional',
            description: "In today's digital world, high-quality videos are essential to capturing attention and driving engagement. Our expert video editing services ensure that your content stands out with seamless transitions, dynamic effects, and polished storytelling.",
            extra: 'Experience the future of storytelling with our expert video editing services.',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            cta: { text: 'Start Creating', href: '#' },
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            title: 'CRM & ERP Solutions',
            highlight: 'Custom',
            description: 'Empower your business with scalable, efficient, and fully customized CRM and ERP systems designed to match your exact needs. Whether you\'re managing operations, tracking sales, or optimizing workflows, our solutions are crafted to simplify complexity and drive growth.',
            extra: 'Discover the competitive edge with technology that\'s built around you.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            cta: { text: 'Explore Solutions', href: '#' },
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Web Development',
            highlight: 'Expert',
            description: 'In the modern digital era, a high-performing website is the foundation of any successful business. Our expert web development services ensure that your website is not only visually stunning but also fast, secure, and user-friendly.',
            extra: 'Experience the future of innovation with our cutting-edge web development solutions.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            cta: { text: 'Build with Us', href: '#' },
            gradient: 'from-purple-500 to-indigo-500',
        },
    ];

    return (
        <section id="about" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Our Main Services</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
                        Emphasizing Our <span className="text-gradient">Core Expertise</span>
                    </h2>
                </div>

                {/* Features */}
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center gap-12`}
                        >
                            {/* Content */}
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                                    Elevate Your Business with{' '}
                                    <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                        {feature.highlight}
                                    </span>
                                    <br />
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                                <p className="text-indigo-400 font-medium italic">
                                    {feature.extra}
                                </p>
                                <a
                                    href={feature.cta.href}
                                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${feature.gradient} text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300`}
                                >
                                    <span>{feature.cta.text}</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Image Card */}
                            <div className="flex-1">
                                <div className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                                    <div className="relative glass rounded-2xl overflow-hidden">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="glass-dark rounded-xl p-4">
                                                <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                                                <p className="text-gray-300 text-sm mt-1">Transform your vision into reality</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
