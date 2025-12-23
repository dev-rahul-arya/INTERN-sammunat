import { useState, useEffect, useRef } from 'react';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { value: 300, suffix: '+', label: 'Completed Projects', icon: '🚀' },
        { value: 900, suffix: '+', label: 'Happy Customers', icon: '😊' },
        { value: 100, suffix: '+', label: 'Expert Employees', icon: '👨‍💻' },
        { value: 4.0, suffix: '', label: 'Average Rating', icon: '⭐' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const Counter = ({ end, duration = 2000, suffix = '' }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(step);
        }, [isVisible, end, duration]);

        return (
            <span>
                {Number.isInteger(end) ? count : count.toFixed(1)}
                {suffix}
            </span>
        );
    };

    return (
        <section ref={sectionRef} className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
