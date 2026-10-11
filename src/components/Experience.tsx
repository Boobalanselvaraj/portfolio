import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Layers,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

interface WorkExperience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  isCurrent: boolean;
  type: string;
  gradient: string;
  summary: string;
  highlights: string[];
  skills: string[];
  metrics: { label: string; value: string }[];
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'all' | 's10' | 'realtech'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('s10-health');

  const experiences: WorkExperience[] = [
    {
      id: 's10-health',
      company: 'S10 Health',
      location: 'Chennai, Tamil Nadu',
      role: 'Full Stack Developer',
      period: 'Oct 2026 – Present',
      duration: 'Current Role',
      isCurrent: true,
      type: 'Full-time',
      gradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      summary:
        'Full Stack Developer at S10 Health in Chennai, architecting end-to-end digital health platforms, robust APIs, and scalable reactive frontend systems.',
      highlights: [
        'Architecting and developing full-stack web platforms using React, TypeScript, and modern Node.js/Express backend services.',
        'Engineering responsive clinical dashboards, medical record workflows, and patient data visualizations with high reliability.',
        'Designing secure RESTful APIs, robust state management, and optimized database queries for mission-critical healthcare systems.',
        'Collaborating with multidisciplinary engineering squads to ensure high code quality, system performance, and accessibility standards.',
      ],
      skills: [
        'Full Stack Development',
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'REST APIs',
        'Tailwind CSS',
        'System Architecture',
        'Git',
      ],
      metrics: [
        { label: 'Role', value: 'Full Stack' },
        { label: 'Domain', value: 'HealthTech' },
        { label: 'Hub', value: 'Chennai' },
      ],
    },
    {
      id: 'realtech-gps',
      company: 'Realtech GPS PVT LTD',
      location: 'Perundurai, Erode, Tamil Nadu',
      role: 'Junior Software Developer',
      period: 'May 2024 – Sep 2026',
      duration: '2.5 Years',
      isCurrent: false,
      type: 'Full-time',
      gradient: 'from-blue-500/15 via-indigo-500/10 to-transparent',
      summary:
        'Led frontend development for smart IoT platforms including iChlorine and iTank, engineering TanStack data grids and live MQTT telematics mapping.',
      highlights: [
        'Designed and delivered comprehensive Admin and Super Admin panels for iChlorine and iTank smart water automation systems.',
        'Engineered high-performance data tables with TanStack Table featuring multi-column sorting, custom filtering, and data exports.',
        'Integrated Google Maps Web API and MQTT protocol for low-latency live GPS location tracking and sensor telemetry.',
        'Managed server communication with React Query, eliminating redundant requests and streamlining API polling cycles.',
        'Maintained Git branching workflows, conducted code reviews, and resolved merge conflicts during mission-critical releases.',
      ],
      skills: [
        'React',
        'JavaScript (ES6+)',
        'TanStack Table',
        'React Query',
        'Google Maps API',
        'MQTT Protocol',
        'Tailwind CSS',
        'REST APIs',
      ],
      metrics: [
        { label: 'Tenure', value: '2.5 Years' },
        { label: 'Flagship Apps', value: 'iChlorine & iTank' },
        { label: 'Protocol', value: 'MQTT / Maps' },
      ],
    },
    {
      id: 'coapps-ai',
      company: 'Coapps.ai',
      location: 'Chennai, Tamil Nadu - Online',
      role: 'Python Full Stack Intern',
      period: 'Jan 2024 – Apr 2024',
      duration: '4 Months',
      isCurrent: false,
      type: 'Internship',
      gradient: 'from-purple-500/15 via-pink-500/10 to-transparent',
      summary:
        'Engineered full-stack features, backend REST APIs, and database models during intensive full-stack internship.',
      highlights: [
        'Developed full-stack web applications with Python backend services and relational databases.',
        'Constructed RESTful API endpoints and integrated responsive client interfaces.',
        'Strengthened core foundations in database schema design, algorithms, and modular code architecture.',
      ],
      skills: ['Python', 'REST APIs', 'MySQL', 'Full Stack Development', 'Git'],
      metrics: [
        { label: 'Type', value: 'Internship' },
        { label: 'Focus', value: 'Full Stack Python' },
      ],
    },
  ];

  const filteredExperiences = experiences.filter((exp) => {
    if (activeTab === 's10') return exp.id === 's10-health';
    if (activeTab === 'realtech') return exp.id === 'realtech-gps';
    return true;
  });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-500" />
            Professional Experience & Career History
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-950 dark:text-white">
            Work <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
            Full Stack Developer delivering enterprise healthcare software at S10 Health, backed by 2.5 years of engineering real-time IoT platforms at Realtech GPS.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-slate-200/80 dark:bg-gray-900/90 border border-slate-300/80 dark:border-white/10 backdrop-blur-xl flex gap-1 shadow-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-white/5'
              }`}
            >
              All Roles ({experiences.length})
            </button>
            <button
              onClick={() => setActiveTab('s10')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 's10'
                  ? 'bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-300/40 dark:hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              S10 Health (Current)
            </button>
            <button
              onClick={() => setActiveTab('realtech')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'realtech'
                  ? 'bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20'
                  : 'text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-300/40 dark:hover:bg-white/5'
              }`}
            >
              Realtech GPS (2.5 Yrs)
            </button>
          </div>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-8 relative">
          {/* Vertical Connecting Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600/30" />

          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative md:pl-20"
                >
                  {/* Node Icon on Timeline */}
                  <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full items-center justify-center border-2 border-white dark:border-gray-950 shadow-lg z-10">
                    {exp.isCurrent ? (
                      <span className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500 border border-white"></span>
                      </span>
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-blue-500 border border-white" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-2xl border ${
                      exp.isCurrent
                        ? 'bg-white dark:bg-gray-900 border-cyan-400/60 dark:border-cyan-500/40 shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-cyan-950/40 hover:border-cyan-500 dark:hover:border-cyan-400'
                        : 'bg-white dark:bg-gray-900 border-slate-200 dark:border-white/10 hover:border-blue-400/50 dark:hover:border-blue-500/40 shadow-md dark:shadow-xl'
                    }`}
                  >
                    {/* Corner subtle ambient lighting */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        {/* Status Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {exp.isCurrent ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/40">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
                              Current Role
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700">
                              <ShieldCheck className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                              {exp.duration}
                            </span>
                          )}

                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/10">
                            {exp.type}
                          </span>
                        </div>

                        {/* Role Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>

                        {/* Company & Location */}
                        <div className="flex flex-wrap items-center gap-4 text-sm mt-1 text-slate-600 dark:text-gray-300">
                          <span className="font-bold text-lg bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-300 bg-clip-text text-transparent">
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4 text-cyan-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="sm:text-right shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-gray-950/70 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-200 shadow-sm">
                          <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                      {exp.summary}
                    </p>

                    {/* Interactive Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                      {exp.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-xl bg-slate-100/80 dark:bg-gray-950/70 border border-slate-200/80 dark:border-white/10 transition-colors"
                        >
                          <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-gray-400 tracking-wider">
                            {metric.label}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-300 mt-0.5">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Key Contributions */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-slate-200 dark:border-white/10 pt-5 mt-2 space-y-4"
                        >
                          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-gray-400 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-cyan-500" />
                            Key Engineering Responsibilities & Impact
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.highlights.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Tech Tags & Expand Button */}
                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-gray-950/70 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 hover:text-slate-900 dark:hover:text-white transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Expand / Collapse Toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedId(isExpanded ? null : exp.id);
                        }}
                        className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 self-end sm:self-center"
                      >
                        <span>{isExpanded ? 'Show less' : 'View full details'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;
