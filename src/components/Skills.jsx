export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "Python", "MongoDB", "MySQL"]
    },
    {
      title: "Cloud & Tools",
      skills: ["Git & GitHub", "Vercel", "Render", "Aiven Cloud", "Cron Automation", "VS Code", "MySQL Workbench"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            My <span className="text-blue-600">Technical Arsenal</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From building responsive user interfaces to managing automated cloud deployments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-800 mb-6 border-b-2 border-blue-100 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
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
  )
}