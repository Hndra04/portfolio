import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { MobileNav } from "./components/MobileNav";
import { portfolioData } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-200">
      <MobileNav />

      <main className="pt-28">
        <Hero />
        
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent max-w-4xl mx-auto" />
        
        <div id="about"><About /></div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent max-w-4xl mx-auto" />
        
        <div id="education"><Education /></div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent max-w-4xl mx-auto" />
        
        <div id="experience"><Experience /></div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent max-w-4xl mx-auto" />
        
        <div id="skills"><Skills /></div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent max-w-4xl mx-auto" />
        
        <div id="projects"><Projects /></div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent max-w-4xl mx-auto" />
        
        <div id="contact"><Contact /></div>
      </main>

      <footer className="py-10 px-6 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto text-center text-slate-500 dark:text-slate-400">
          <p>© 2026 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;