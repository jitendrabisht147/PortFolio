import React from 'react'
import { HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi'
import bit from '../assets/bit.webp'

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Baroda Institute Of Technology - BIT',
    type: 'Internship',
    duration: 'Jan 2026 - Jun 2026',
    location: 'Vadodara, Gujarat, India · On-site',
    logo: bit, 
    responsibilities: [
      'Architected responsive, accessible, and high-performance client-side interfaces using React and modern CSS frameworks.',
      'Collaborated closely with backend developers to integrate RESTful API endpoints and optimize dynamic state handling.',
      'Refactored legacy UI components to improve overall application responsiveness, cross-browser consistency, and load performance.',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'GitHub'],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#F8FAFC] dark:bg-[#0B0F17] py-14 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      {/* Exact outer container width matching About.jsx */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 justify-center text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-indigo-200 dark:border-indigo-800/80 transition-colors">
            Work Experience
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-4 leading-snug transition-colors">
            Hands-on development experience
          </h2>
        </div>

        {/* Experience Cards - Full 1200px Container Width */} 
        <div className="space-y-6 w-full">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="group w-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-300"
            >
              {/* Header: Company, Role, Badge & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-start sm:items-center gap-4">
                  {/* Company Logo Container */}
                  <div className="w-14 h-14 min-w-[3.5rem] rounded-xl bg-white border border-slate-200/90 dark:border-slate-700/60 p-2 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="font-bold text-slate-800 dark:text-slate-200">{item.company.charAt(0)}</span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {item.role}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.company}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600 text-xs">•</span>
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-100 dark:border-indigo-800/80">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duration & Location details */}
                <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                    <HiOutlineCalendar className="text-indigo-600 dark:text-indigo-400 text-base shrink-0" />
                    {item.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <HiOutlineLocationMarker className="text-slate-400 dark:text-slate-500 text-base shrink-0" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.responsibilities.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience