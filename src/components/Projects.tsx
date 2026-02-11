import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
    new Set(),
  );
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  type Project = {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    gradient: string;
    icon: string;
    category: "Frontend" | "Backend";
  };
  const projects: Project[] = [
    {
      title: "iChlorine",
      description:
        "A comprehensive water management system with admin and super admin panels for independent access control.",
      features: [
        "Designed and implemented both Admin and Super Admin panels with independent functionalities",
        "Implemented data tables using TanStack Table (stable version) with multiple sorting and export features",
        "Managed server communication using React Query for efficient data fetching and API polling",
        "Currently contributing to ongoing development, focusing on feature enhancements, optimization, and scalability",
      ],
      technologies: [
        "React",
        "TanStack Table",
        "React Query",
        "Tailwind CSS",
        "Google Maps API",
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: "💧",
      category: "Frontend",
    },
    {
      title: "iTank - Smart Water Management System",
      description:
        "A real-time water monitoring system with advanced features for tracking and managing water resources.",
      features: [
        "Performed various tasks including bug fixes, issue resolution, and small feature enhancements",
        "Initiated the migration to React, independently designing and implementing project structure, routing, and authentication",
        "Integrated Tailwind CSS, Google Maps Web API, and MQTT to enable real-time data monitoring",
      ],
      technologies: ["React", "Tailwind CSS", "Google Maps API", "MQTT"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🌊",
      category: "Frontend",
    },
    {
      title: "Gemini AI Chat App",
      description:
        "An intelligent ChatGPT-like application powered by Google Gemini AI for natural conversations.",
      features: [
        "Integrated Google Gemini API for advanced AI-powered conversations",
        "Built responsive chat interface with real-time message streaming",
        "Implemented conversation history and context management",
        "Designed modern UI with smooth animations and transitions",
      ],
      technologies: [
        "React",
        "Gemini API",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
      ],
      gradient: "from-indigo-500 to-purple-600",
      icon: "🤖",
      category: "Frontend",
    },
    {
      title: "MQTT Private Chat App",
      description:
        "A real-time private messaging application using MQTT protocol for instant communication.",
      features: [
        "Implemented MQTT protocol for real-time bidirectional messaging",
        "Built secure private chat rooms with end-to-end message delivery",
        "Designed responsive chat UI with message status indicators",
        "Integrated user presence detection and typing indicators",
      ],
      technologies: ["React", "MQTT", "JavaScript", "CSS3"],
      gradient: "from-green-500 to-teal-500",
      icon: "💬",
      category: "Frontend",
    },
    {
      title: "Cloud Image Upload System",
      description:
        "A robust image upload and management system using Cloudinary with Prisma ORM integration.",
      features: [
        "Integrated Cloudinary API for cloud-based image storage and optimization",
        "Implemented Prisma ORM for efficient database operations",
        "Built image upload with drag-and-drop functionality",
        "Added image transformation and optimization features",
      ],
      technologies: ["Node.js", "Express", "Prisma ORM", "Cloudinary", "MySQL"],
      gradient: "from-orange-500 to-red-500",
      icon: "☁️",
      category: "Backend",
    },
    {
      title: "Email Sender (SMTP)",
      description:
        "A professional email sending service using SMTP protocol with template support and Prisma ORM.",
      features: [
        "Implemented SMTP protocol for reliable email delivery",
        "Built email template system with dynamic content injection",
        "Integrated Prisma ORM for email logs and user management",
        "Added email queue system for bulk sending",
      ],
      technologies: ["Node.js", "Express", "Prisma ORM", "Nodemailer", "MySQL"],
      gradient: "from-pink-500 to-rose-500",
      icon: "📧",
      category: "Backend",
    },
    {
      title: "CRUD Application",
      description:
        "A full-featured CRUD application with RESTful API and Prisma ORM for data management.",
      features: [
        "Built complete RESTful API with all CRUD operations",
        "Implemented Prisma ORM for type-safe database queries",
        "Added input validation and error handling",
        "Designed scalable architecture with modular code structure",
      ],
      technologies: ["Node.js", "Express", "Prisma ORM", "MySQL", "REST API"],
      gradient: "from-cyan-500 to-blue-600",
      icon: "📝",
      category: "Backend",
    },
  ];

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
          );
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setVisibleProjects(new Set()); // Reset animations when filter changes
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work across frontend and backend development,
            demonstrating expertise in building scalable and user-friendly
            applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => handleFilterClick("All")}
            className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "All"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-xl"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleFilterClick("Frontend")}
            className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "Frontend"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-xl"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleFilterClick("Backend")}
            className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "Backend"
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-xl"
            }`}
          >
            Backend
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const isVisible = visibleProjects.has(index);
            return (
              <div
                key={index}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                data-index={index}
                className={`group glass rounded-2xl overflow-hidden hover:glow-effect transition-all duration-700 hover:scale-105 hover:-translate-y-3 ${
                  isVisible ? "animate-fade-in-scale" : "opacity-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project Header with Icon */}
                <div
                  className={`relative h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <div className="text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-2xl z-10">
                    {project.icon}
                  </div>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transform group-hover:scale-110 transition-transform duration-700"></div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-bold text-gray-800 dark:text-white backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Key Features:
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 transform transition-all duration-300 hover:translate-x-1"
                          style={{
                            animationDelay: `${index * 0.1 + idx * 0.05}s`,
                          }}
                        >
                          <svg
                            className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-default"
                          style={{
                            animationDelay: `${index * 0.1 + idx * 0.03}s`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Get In Touch</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .group:hover .text-7xl {
                    animation: float 2s ease-in-out infinite;
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes rotateIn {
                    from {
                        opacity: 0;
                        transform: rotate(-10deg) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: rotate(0) scale(1);
                    }
                }

                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    60% {
                        opacity: 1;
                        transform: translateY(-10px);
                    }
                    80% {
                        transform: translateY(5px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-fade-in-scale {
                    animation: fadeInScale 0.8s ease-out forwards;
                }

                .animate-rotate-in {
                    animation: rotateIn 0.8s ease-out forwards;
                }

                .animate-bounce-in {
                    animation: bounceIn 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
                }
            `}</style>
    </section>
  );
};

export default Projects;
