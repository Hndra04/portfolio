import { portfolioData } from "../data/portfolio";

export function Education() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Education</h2>
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-slate-700/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.institution}</h3>
              <p className="text-green-600 dark:text-green-400 mt-1">{edu.degree}</p>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                GPA: {edu.gpa} · {edu.location}
              </p>
              <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}