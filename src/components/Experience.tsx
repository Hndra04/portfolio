import { portfolioData } from "../data/portfolio";

export function Experience() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Experience</h2>
        <div className="space-y-10">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-green-500/30">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.position}</h3>
                <p className="text-green-600 dark:text-green-400 mt-1">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  {exp.location} · {exp.period}
                </p>
                <ul className="mt-5 space-y-3">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed pl-4 border-l-2 border-green-500/20">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}