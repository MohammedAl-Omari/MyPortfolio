import Reveal from "../Components/Reveal";

const skillCategories = [
  { 
    title: "Programming", 
    items: ["Python", "C#", "JavaScript", "TypeScript", "R"], 
    color: "group-hover:text-blue-500" 
  },
  { 
    title: "Web & Frameworks", 
    items: ["React", "Vue.js", "Flask", ".NET", "Vite", "Tailwind"], 
    color: "group-hover:text-green-500" 
  },
  { 
    title: "Backend & Architecture", 
    items: ["ASP.NET Core", "DDD", "MediatR", "REST API", "JWT"], 
    color: "group-hover:text-purple-500" 
  },
  { 
    title: "DevOps & Systems", 
    items: ["Linux", "Git", "Raspberry Pi", "MQTT", "IoT", "iperf3"], 
    color: "group-hover:text-orange-500" 
  },
    { 
    title: "Networking & Protocols", 
    items: ["TCP/IP", "BBRv2", "CUBIC", "iperf3", "Network Analysis", "Packet Tracing", "Cisco"], 
    color: "group-hover:text-cyan-500" 
  },
];

export default function About() {
  return (
    <div className="space-y-16 py-10">
      {/* Bio Section */}
      <Reveal>
        <section>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed max-w-3xl opacity-90">
            I am a Data Technology student at the <span className="text-blue-500 font-semibold">University of Stavanger</span>, 
            passionate about backend development, full-stack web applications, 
            and exploring networking and IoT technologies.
          </p>
        </section>
      </Reveal>

      {/* Skills Grid - Mirroring ProjectCard Style */}
      <section>
        <Reveal>
          <h2 className="text-2xl font-bold mb-8 italic">Technical Toolkit</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <Reveal key={cat.title}>
              <div className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-md hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
                
                {/* Title - Inherits the group-hover color */}
                <h3 className={`text-xl font-bold mb-4 transition-colors ${cat.color}`}>
                  {cat.title}
                </h3>
                
                {/* Items/Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map(item => (
                    <span 
                      key={item} 
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Languages - Consistent Project Card Style */}
      <Reveal>
        <section className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-md hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
          <h3 className="text-xl font-bold mb-3 transition-colors hover:text-blue-500">
            Languages
          </h3>
          <p className="text-gray-800 dark:text-gray-300 font-medium">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Norwegian (Fluent)
            </span>
            <span className="mx-3 text-gray-400">|</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              English (Fluent)
            </span>
            <span className="mx-3 text-gray-400">|</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Arabic (Native)
            </span>
          </p>
        </section>
      </Reveal>
    </div>
  );
}