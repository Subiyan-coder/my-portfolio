import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Task Management System",
      summary: "A full-stack MERN application designed to streamline team collaboration and task delegation. Built from scratch with a focus on security, responsive design, and complex database relationships.",
      features: [
        "Role-Based Access Control (RBAC): Engineered a secure, three-tiered permission system (Admin, Manager, Team Member) including a hidden administrative 'God Mode' for complete user management.",
        "Secure Authentication: Implemented robust user login and registration using JSON Web Tokens (JWT) and bcrypt password hashing.",
        "Interactive Dashboard: Developed a dynamic UI with real-time analytics for tracking task statuses, complete with a global Dark/Light mode toggle."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Bootstrap"],
      deployment: ["Vercel", "Render", "Cron Job"],
      liveLink: "https://task-manager-pink-delta.vercel.app/#",
      githubLink: "https://github.com/Subiyan-coder/Task_Manager"
    },
    {
      title: "Student Records Manager",
      summary: "A robust backend system for managing student data and secure authentication. Deployed to the cloud with automated systems to ensure permanent database uptime.",
      features: [
        "Secure Database Architecture: Designed and implemented a secure relational database schema using MySQL hosted on Aiven Cloud.",
        "Automated Reliability: Engineered an automated Cron Job system to ping the Render server, completely preventing cold-starts and ensuring 100% API availability.",
        "RESTful API Design: Built a Python backend to handle complex CRUD operations and secure password decryption."
      ],
      techStack: ["Python", "MySQL", "Aiven Cloud"],
      deployment: ["Render", "Cron Job", "Automated Pings"],
      liveLink: "https://student-records-manager-50un.onrender.com/",
      githubLink: "https://github.com/Subiyan-coder/Student-Records-Manager"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A deep dive into the architecture, security, and deployment of my cloud applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition duration-300">
              <div className="p-8 lg:p-10 flex-grow">
                
                {/* NEW TOP LAYOUT: Title on left, Buttons on right */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-6 border-b border-slate-100 pb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{project.title}</h3>
                  
                  {/* The Action Buttons */}
                  <div className="flex flex-wrap gap-4 shrink-0">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-200 transition flex items-center gap-2 border border-slate-200">
                      <SiGithub className="text-lg" />
                      GitHub Code
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {project.summary}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, fIndex) => {
                    const [boldPart, restOfText] = feature.split(": ");
                    return (
                      <li key={fIndex} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                        <svg className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-slate-800">{boldPart}:</strong> {restOfText}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-slate-700 mr-2 uppercase tracking-wider">Stack:</span>
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-slate-700 mr-2 uppercase tracking-wider">Deployed On:</span>
                    {project.deployment.map((deploy, deployIndex) => (
                      <span key={deployIndex} className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-sm font-bold">
                        {deploy}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}