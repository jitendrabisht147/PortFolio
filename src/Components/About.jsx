import React from 'react'
import {
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiMapPin,
  FiLayers,
  FiDownload,
  FiArrowRight,
} from 'react-icons/fi'

// Use the same file path as your hero's "Download Resume" button.
const RESUME_URL = '/Jitendra-Bisht-Resume.pdf'

const quickFacts = [
  { icon: FiMapPin, label: 'Based in', value: 'Vadodara, Gujarat' },
  { icon: FiLayers, label: 'Projects', value: '3 built, with live demos' },
  { icon: FiBriefcase, label: 'Experience', value: 'Frontend internship, 2026' },
]

const education = [
  {
    title: 'MERN Stack Development Certification',
    place: 'Baroda Institute of Technology',
    period: '2026',
  },
  
]

const cardBase =
  'p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-200 flex items-start gap-4'

const iconBase =
  'p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 border border-indigo-100/60 dark:border-indigo-800/40'

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#F8FAFC] dark:bg-[#0B0F17] py-14 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-indigo-200 dark:border-indigo-800/80 transition-colors">
            About Me
          </span>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-4 max-w-3xl leading-snug transition-colors"
          >
            Frontend polish, backend logic, one developer.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-600 dark:text-slate-200 leading-relaxed text-base sm:text-lg transition-colors">
            <p>
              I'm a{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Full-Stack Developer
              </strong>{' '}
              specializing in the MERN stack (MongoDB, Express, React,
              Node.js), focused on building responsive, fast, and intuitive web
              applications.
            </p>
            <p>
              I completed a MERN Stack Development certification and a frontend
              internship at Baroda Institute of Technology, where I worked on
              real UI features and learned to ship clean, maintainable code in a
              team setting.
            </p>
            <p>
              I enjoy the whole journey, from designing the interface to
              building REST APIs and authentication. I'm looking for a role
              where I can keep growing while delivering real value.
            </p>

            {/* Quick facts */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 px-4 py-3 transition-colors"
                >
                  <dt className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Icon aria-hidden="true" className="text-sm text-indigo-600 dark:text-indigo-400" />
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC] dark:focus-visible:ring-offset-[#0B0F17]"
              >
                View my projects
                <FiArrowRight aria-hidden="true" />
              </a>
             
            </div>

            {/* Availability */}
            <a
              href="#contact"
              className="pt-3 sm:pt-4 inline-flex items-center gap-3 group"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Open to full-time roles and freelance projects. Get in touch
              </span>
            </a>
          </div>

          {/* Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 sm:gap-4">
            {/* Skills */}
            <div className={cardBase}>
              <div className={iconBase}>
                <FiCode aria-hidden="true" className="text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                  Full-stack development
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed transition-colors">
                  React interfaces, Node.js and Express REST APIs, MongoDB
                  databases, and JWT authentication.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className={cardBase}>
              <div className={iconBase}>
                <FiBriefcase aria-hidden="true" className="text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                  Frontend Developer Intern
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed transition-colors">
                  Baroda Institute of Technology, Jan - Jun 2026. <br/>Built UI
                  features and worked in a team codebase.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className={cardBase}>
              <div className={iconBase}>
                <FiBookOpen aria-hidden="true" className="text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                  Training & Certification
                </h3>
                <ul className="mt-1 space-y-2">
                  {education.map((item) => (
                    <li
                      key={item.title}
                      className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors"
                    >
                      <span className="block font-medium text-slate-800 dark:text-slate-100">
                        {item.title}
                      </span>
                      {item.place}
                      {item.period ? `, ${item.period}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About