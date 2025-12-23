import { useState } from 'react';

const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: 'Enterprise CRM Solution',
            description: 'A comprehensive customer relationship management system for a global retail chain with advanced analytics and automation features.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['CRM', 'Retail', 'Automation'],
            stats: '10k+ Users',
        },
        {
            title: 'Manufacturing ERP',
            description: 'Custom enterprise resource planning system for a manufacturing company with 5 facilities, streamlining operations.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['ERP', 'Manufacturing', 'Inventory'],
            stats: '5 Facilities',
        },
        {
            title: 'Healthcare Management',
            description: 'Patient management and appointment scheduling system for a hospital network with integrated billing.',
            image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Healthcare', 'Scheduling', 'Records'],
            stats: '50k+ Patients',
        },
        {
            title: 'E-commerce Platform',
            description: 'Multi-vendor marketplace with advanced payment gateway integration and AI-powered recommendation engine.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['E-commerce', 'AI', 'Marketplace'],
            stats: '100k+ Orders',
        },
        {
            title: 'Logistics Management',
            description: 'Fleet tracking and route optimization platform with GPS integration and predictive analytics.',
            image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Logistics', 'GPS', 'Analytics'],
            stats: '500+ Routes',
        },
        {
            title: 'Digital Banking Platform',
            description: 'Secure mobile banking solution with biometric authentication and real-time fraud detection.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Fintech', 'Banking', 'Security'],
            stats: '2M+ Transactions',
        },
    ];

    return (
        <section id="portfolio" className="py-24 bg-gradient-to-b from-[#1a1a2e] via-[#0a0a0a] to-[#1a1a2e]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Our Recent Work</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Explore our <span className="text-gradient">successfully implemented</span>
                        <br />systems across various industries
                    </h2>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative rounded-2xl overflow-hidden glass hover-lift cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Stats Badge */}
                                <div className="absolute top-4 right-4 glass-dark px-3 py-1 rounded-full text-sm text-white font-medium">
                                    {project.stats}
                                </div>
                            </div>

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/10 rounded-full text-xs text-white font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Default Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-indigo-500/20 rounded-full text-xs text-indigo-300 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
