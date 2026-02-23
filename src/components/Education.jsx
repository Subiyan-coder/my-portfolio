import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const academics = [
    {
      degree: "Master of Science (MSc) in Information Technology",
      college: "CMS College of Science and Commerce, Coimbatore",
      year: "Graduated 2025",
      score: "CGPA: 7.81",
      description: "Advanced coursework focusing on modern software architecture, database management systems, and full-stack development methodologies."
    },
    {
      degree: "Bachelor of Science (BSc) in Computer Science",
      college: "Jamal Mohamed College, Trichy",
      year: "Graduated 2023", // Update this year if needed!
      score: "CGPA: 8.40",
      description: "Built a rigorous foundation in programming fundamentals, data structures, algorithms, and relational databases."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white px-6 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Academic <span className="text-blue-600">Background</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            My formal foundation in computer science and information technology.
          </p>
        </div>
        
        <div className="space-y-8">
          {academics.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition duration-300">
              
              <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                <FaGraduationCap className="text-3xl" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-800">{item.degree}</h3>
                  <span className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                    {item.score}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-blue-600 mb-1">{item.college}</h4>
                <p className="text-sm font-semibold text-slate-500 mb-4">{item.year}</p>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}