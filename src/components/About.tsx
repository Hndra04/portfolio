import { portfolioData } from "../data/portfolio";

export function About() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
          {portfolioData.summary}
        </p>
      </div>
    </section>
  );
}