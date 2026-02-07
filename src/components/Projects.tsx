const Projects = () => {
    const projects = [
        {
            title: 'iChlorine',
            description: 'A comprehensive water management system with admin and super admin panels for independent access control.',
            features: [
                'Designed and implemented both Admin and Super Admin panels with independent functionalities',
                'Implemented data tables using TanStack Table (stable version) with multiple sorting and export features',
                'Managed server communication using React Query for efficient data fetching and API polling',
                'Currently contributing to ongoing development, focusing on feature enhancements, optimization, and scalability',
            ],
            technologies: ['React', 'TanStack Table', 'React Query', 'Tailwind CSS', 'Google Maps API'],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'iTank - Smart Water Management System',
            description: 'A real-time water monitoring system with advanced features for tracking and managing water resources.',
            features: [
                'Performed various tasks including bug fixes, issue resolution, and small feature enhancements',
                'Initiated the migration to React, independently designing and implementing project structure, routing, and authentication',
                'Integrated Tailwind CSS, Google Maps Web API, and MQTT to enable real-time data monitoring',
            ],
            technologies: ['React', 'Tailwind CSS', 'Google Maps API', 'MQTT', 'WebSocket'],
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my skills in building scalable and user-friendly applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300 hover:scale-105 animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Project Header */}
                            <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                            <div className="p-8">
                                {/* Title */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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

export default Projects;
