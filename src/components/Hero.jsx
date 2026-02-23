export default function Hero() {
  return (
    // Added pb-28 here to give the arrow plenty of breathing room at the bottom
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-slate-50 px-6 text-center pb-28 pt-12">
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 mt-auto">
        Hi, I'm <span className="text-blue-600">Mohamed Muneerul Subiyan .R</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-slate-700 font-medium mb-6">
        Full-Stack Developer | MSc IT
      </h2>
      
      <p className="max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
        I specialize in building dynamic, responsive web applications and robust database systems using the MERN stack, Python, and MySQL.
      </p>

      {/* FIXED: Clickable Contact Strip */}
      <div className="flex flex-wrap justify-center gap-8 mb-10 text-slate-600 font-medium">
        
        {/* The mailto: command opens their default email app */}
        <a href="mailto:subiyanr813@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>subiyanr813@gmail.com</span>
        </a>

        {/* The tel: command opens their phone dialer */}
        <a href="tel:+916382574627" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+91 63825 74627</span>
        </a>

      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-auto">
        <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300">
          View My Work
        </a>
        
        <a href="https://drive.google.com/file/d/1WESDhI6SFn5wH6s8nk7hdGzuydWT5mpd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold shadow-sm border border-slate-200 hover:bg-slate-100 transition duration-300 flex items-center gap-2">
          📄 View Resume
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-slate-500 font-medium mb-2">Scroll for Skills</span>
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}