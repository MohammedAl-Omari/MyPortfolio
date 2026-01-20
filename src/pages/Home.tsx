import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Reveal>
        <div className="w-32 h-32 rounded-full bg-linear-to-tr from-blue-500 to-purple-600 mb-8 shadow-xl ring-4 ring-gray-100 dark:ring-gray-800" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-500 font-bold">Hi, I'm Mohammed</span>
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed font-medium">
           <span className="text-blue-600 dark:text-blue-400">A Software Engineer building robust and scalable digital solutions.</span>
        </p>
      </Reveal>

      <Reveal>
        <div className="flex gap-4 mb-20">
          <Link 
            to="/projects" 
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            View My Work
          </Link>
          
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-full border-2 border-gray-900 dark:border-gray-700 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-md active:scale-95"
          >
            Let's Talk
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <div className="w-full border-t-2 border-gray-200 dark:border-gray-800 pt-10">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-500 mb-6">Expertise</p>
          <div className="flex flex-wrap justify-center gap-8 font-bold text-lg text-gray-900 dark:text-gray-200">
             <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">Python</span> 
             <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">.NET</span> 
             <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">React</span> 
             <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">TypeScript</span> 
             <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700">Power Platform</span> 
          </div>
        </div>
      </Reveal>
    </div>
  );
}