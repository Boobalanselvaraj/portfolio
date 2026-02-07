const Education = () => {
    const education = [
        {
            degree: 'BE - Electronics and Communication Engineering',
            institution: 'Velalar College of Engineering and Technology',
            period: '2020 - 2024',
            grade: 'CGPA: 8.9 / 10',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            degree: 'Higher Secondary',
            institution: 'MPD Government Higher Secondary School',
            period: '2019 - 2020',
            grade: 'Grade: 62 / 100%',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            Academic Background
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-2xl p-6 hover:glow-effect transition-all duration-300 hover:scale-105 animate-slide-up"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className={`p-4 bg-gradient-to-r ${edu.gradient} rounded-xl text-white self-start`}>
                                            {edu.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                                <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {edu.period}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                {edu.grade}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
