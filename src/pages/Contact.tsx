import Reveal from "../Components/Reveal";
import { Mail, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <Reveal>
        <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="mb-10 text-center font-medium">
          I am currently looking for new opportunities and my inbox is always open.
        </p>
      </Reveal>

      {/* Info Grid - Styled like Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Reveal>
          <div className="group flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 h-full shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
            <Mail className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm font-bold">Email</span>
            <a href="mailto:mohammedalomari437@gmail.com" className="text-[10px] font-bold text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors truncate w-full text-center mt-1">
              mohammedalomari437@gmail.com
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="group flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 h-full shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
            <Phone className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm font-bold">Phone</span>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">+47 409 68 072</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="group flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 h-full shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
            <MapPin className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-sm font-bold">Location</span>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">Sandnes, Norway</span>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <form action="https://formspree.io/f/meeelkva" method="POST" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name"
              required
              className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <textarea 
            name="message"
            placeholder="How can I help you?"
            required
            rows={5}
            className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 shadow-lg"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </Reveal>
    </div>
  );
}