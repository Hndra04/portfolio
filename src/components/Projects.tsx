import { portfolioData } from "../data/portfolio";

const tagColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
  yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
};

export function Projects() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            project.link ? (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-slate-800/50 p-6 rounded-2xl transition-all duration-200 border border-slate-200 dark:border-transparent hover:border-green-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer hover:shadow-lg hover:shadow-green-500/10"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-md font-medium ${tagColors[tag.color] || "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                  <span className="text-xs px-2 py-1 rounded-md font-medium bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                    GitHub Available
                  </span>
                </div>
              </a>
            ) : (
              <div
                key={index}
                className="block bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-md font-medium ${tagColors[tag.color] || "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}