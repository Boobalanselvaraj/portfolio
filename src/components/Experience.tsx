const Experience = () => {
    const experience = {
        company: 'Realtech GPS PVT LTD, Perundurai, Erode',
        position: 'Junior Software Developer',
        period: 'May 2024 - Present',
        responsibilities: [
            'Designed and developed scalable, responsive web applications using React and vanilla JavaScript',
            'Maintained existing applications by fixing issues, implementing enhancements, and ensuring stability',
            'Optimized codebase and improved code quality to meet new feature updates and performance requirements',
            'Managed Git branches and resolved merge conflicts during development and deployment',
        ],
    };

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 border-l-4 border-gradient-to-b from-primary-600 to-accent-600 animate-slide-up">
                        {/* Timeline Dot */}
                        <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>

                        <div className="glass p-8 rounded-xl hover:glow-effect transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {experience.position}
                                    </h3>
                                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                        {experience.company}
                                    </p>
                                </div>
                                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-semibold">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {experience.period}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {experience.responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
