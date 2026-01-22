import { Routes, Route, Link, HashRouter } from "react-router-dom";
import { Github, Linkedin } from "lucide-react"; 
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DarkModeToggle from "./Components/DarkModeToggle";
import RandomQuote from "./Components/RandomQuote";

export default function App() {
  return (
    <HashRouter>
    /* No bg- classes here; handled by body in index.css */
    <div className="min-h-screen w-full p-8 flex flex-col">
      <nav className="flex items-center gap-6 mb-10 border-b pb-4 theme-border">
        <div className="flex gap-4 md:gap-6">
          <Link to="/" className="font-semibold hover:text-blue-500 transition-colors px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">Home</Link>
          <Link to="/projects" className="font-semibold hover:text-blue-500 transition-colors px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">Projects</Link>
          <Link to="/about" className="font-semibold hover:text-blue-500 transition-colors px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">About</Link>
          <Link to="/contact" className="font-semibold hover:text-blue-500 transition-colors px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">Contact</Link>
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <a 
            href="https://github.com/MohammedAl-Omari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block text-muted hover:text-blue-500 transition-colors px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohammed-al-omari-680890233/"
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block text-muted hover:text-blue-500 transition-colors px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700"
          >
            <Linkedin size={20} />
          </a>
          <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 hidden sm:block mx-1"></div>
          <DarkModeToggle />
        </div>
      </nav>
    
      <main className="max-w-4xl mx-auto flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="mt-20 py-10 text-center border-t theme-border">
        <p className="text-xs text-muted mb-2 uppercase tracking-widest">Inspiration</p>
        <RandomQuote />
      </footer>
    </div>
</HashRouter>
  );
}