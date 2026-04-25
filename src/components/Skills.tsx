import { portfolioData } from "../data/portfolio";

export function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.skills.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-700/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}