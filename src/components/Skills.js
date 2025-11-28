'use client'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'TypeScript', 'JavaScript', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js', 'WordPress', 'Elementor']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Agile', 'Jest', 'Postman']
    }
  ]

  return (
    <section className="bg-gradient-to-br from-[#facb33] via-[#f8d966] to-[#f5e699] text-dark px-5 py-24 md:py-32" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-5 border-b-4 w-[150px] mx-auto border-[#ab0020] pb-2">
            Skills
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold text-[#ab0020] mb-4 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-[#0F172A] text-white text-sm rounded-full font-medium"
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

