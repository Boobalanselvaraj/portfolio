import { calculateExperience } from '../utils/experience';

const About = () => {
    const expText = calculateExperience();

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Info */}
                    <div className="space-y-6 animate-slide-up">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm a passionate <span className="font-semibold text-primary-600 dark:text-primary-400">Software Developer</span> with{' '}
                            {expText} years of experience in building responsive and scalable web applications. I specialize in creating
                            clean, performant, and user-friendly interfaces using modern web technologies.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Currently working at <span className="font-semibold text-accent-600 dark:text-accent-400">Realtech GPS PVT LTD</span> in
                            Perundurai, Erode, where I develop and maintain applications using React and vanilla JavaScript, focusing on
                            performance, usability, and clean UI design.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I have a strong foundation in <span className="font-semibold">frontend development</span> with expertise in React,
                            TypeScript, and modern CSS frameworks. I also have knowledge of backend technologies including Node.js, Express,
                            Prisma, and MySQL, making me capable of full-stack development.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
                            <div className="glass p-6 rounded-xl text-center hover:glow-effect transition-all">
                                <div className="text-3xl font-bold text-gradient mb-2">{expText}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                            </div>
                            <div className="glass p-6 rounded-xl text-center hover:glow-effect transition-all">
                                <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                            </div>
                            <div className="glass p-6 rounded-xl text-center hover:glow-effect transition-all">
                                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="glass p-6 rounded-xl hover:glow-effect transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Expert in React, TypeScript, JavaScript (ES6+), HTML5, CSS3, and modern UI frameworks
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl hover:glow-effect transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Backend Knowledge</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Proficient in Node.js, Express, Prisma ORM, MySQL, and RESTful API development
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl hover:glow-effect transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Strong focus on code quality, performance optimization, clean UI design, and Git version control
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl hover:glow-effect transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Real-Time Technologies</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Experience with WebSocket, MQTT, Google Maps API, and real-time data handling
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
