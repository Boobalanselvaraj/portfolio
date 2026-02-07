const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Technologies',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: [
                { name: 'HTML5', level: 95 },
                { name: 'CSS3', level: 90 },
                { name: 'JavaScript (ES6+)', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'React (Vite)', level: 90 },
                { name: 'jQuery', level: 75 },
            ],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Backend Technologies',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            skills: [
                { name: 'Node.js', level: 60 },
                { name: 'Express', level: 60 },
                { name: 'Prisma ORM', level: 50 },
                { name: 'MySQL', level: 60 },
            ],
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: 'UI Frameworks & Styling',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            skills: [
                { name: 'Bootstrap', level: 95 },
                { name: 'Tailwind CSS', level: 90 },
            ],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'State Management',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: [
                { name: 'Redux', level: 80 },
                { name: 'React Query', level: 85 },
            ],
            gradient: 'from-orange-500 to-red-500',
        },
        {
            title: 'Real-Time & Communication',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            skills: [
                { name: 'MQTT', level: 75 },
                { name: 'WebSocket', level: 75 },
                { name: 'Maps & Location Services', level: 80 },
                { name: 'Google Maps API', level: 85 },
            ],
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            title: 'Version Control & Tools',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: [
                { name: 'Git', level: 85 },
                { name: 'ClickUp', level: 80 },
            ],
            gradient: 'from-indigo-500 to-purple-500',
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and expertise across various technologies and frameworks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 hover:glow-effect transition-all duration-300 hover:scale-105 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg text-white`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-8 hover:glow-effect transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            Languages
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Tamil</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Native</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">English</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Fluent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
