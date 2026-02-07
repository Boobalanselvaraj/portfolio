const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Technologies',
            icon: '💻',
            skills: [
                { name: 'HTML5', icon: '🌐' },
                { name: 'CSS3', icon: '🎨' },
                { name: 'JavaScript', icon: '⚡' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'React', icon: '⚛️' },
                { name: 'jQuery', icon: '💫' },
            ],
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
            bgPattern: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        },
        {
            title: 'Backend Technologies',
            icon: '🔧',
            skills: [
                { name: 'Node.js', icon: '🟢' },
                { name: 'Express', icon: '🚂' },
                { name: 'Prisma ORM', icon: '🔷' },
                { name: 'MySQL', icon: '🐬' },
            ],
            gradient: 'from-green-500 via-emerald-500 to-teal-500',
            bgPattern: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
        },
        {
            title: 'UI Frameworks & Styling',
            icon: '🎭',
            skills: [
                { name: 'Bootstrap', icon: '🅱️' },
                { name: 'Tailwind CSS', icon: '🌊' },
            ],
            gradient: 'from-purple-500 via-pink-500 to-rose-500',
            bgPattern: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
        },
        {
            title: 'State Management',
            icon: '🔄',
            skills: [
                { name: 'Redux', icon: '🔮' },
                { name: 'React Query', icon: '🔍' },
            ],
            gradient: 'from-orange-500 via-red-500 to-pink-500',
            bgPattern: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
        },
        {
            title: 'Real-Time & Communication',
            icon: '⚡',
            skills: [
                { name: 'MQTT', icon: '📡' },
                { name: 'WebSocket', icon: '🔌' },
                { name: 'Google Maps API', icon: '🗺️' },
            ],
            gradient: 'from-yellow-500 via-amber-500 to-orange-500',
            bgPattern: 'from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20',
        },
        {
            title: 'Version Control & Tools',
            icon: '�️',
            skills: [
                { name: 'Git', icon: '📦' },
                { name: 'ClickUp', icon: '✅' },
            ],
            gradient: 'from-indigo-500 via-purple-500 to-pink-500',
            bgPattern: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive showcase of my technical expertise across various technologies and frameworks.
                    </p>
                </div>

                {/* Skills Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative glass rounded-3xl overflow-hidden hover:glow-effect transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Gradient Background Pattern */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.bgPattern} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                            
                            {/* Animated Border */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                            
                            <div className="relative p-8">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                        <span className="text-4xl filter drop-shadow-lg">{category.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    {category.skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group/skill"
                                            style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                                        >
                                            <span className="text-2xl transform group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300">
                                                {skill.icon}
                                            </span>
                                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-primary-600 group-hover/skill:to-accent-600 transition-all duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative Bottom Border */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages Section */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="glass rounded-3xl p-8 hover:glow-effect transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <span className="text-4xl">🌍</span>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Languages
                            </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="group/lang relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/lang:opacity-10 transition-opacity duration-300"></div>
                                <div className="relative flex items-center gap-4">
                                    <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg transform group-hover/lang:scale-110 group-hover/lang:rotate-6 transition-all duration-300">
                                        <span className="text-5xl">🇮🇳</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-2xl mb-1">Tamil</h4>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">Native Speaker</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group/lang relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/lang:opacity-10 transition-opacity duration-300"></div>
                                <div className="relative flex items-center gap-4">
                                    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg transform group-hover/lang:scale-110 group-hover/lang:rotate-6 transition-all duration-300">
                                        <span className="text-5xl">🇬🇧</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-2xl mb-1">English</h4>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">Fluent</p>
                                    </div>
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
