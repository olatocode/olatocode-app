'use client'

export default function Highlights() {
  const items = [
    {
      title: 'Production Experience',
      body: 'Shipped and maintained backend systems powering real products in E‑commerce, FinTech, education, and healthcare.'
    },
    {
      title: 'Proven Projects',
      body: 'Built and deployed projects like EventBlown (event API), Datavasity (learning platform), Snh365healthcare, VoteVoice, and Finsocial.'
    },
    {
      title: 'Content & Mentoring',
      body: 'Writes about software engineering on Medium and mentors aspiring developers, helping them get started in tech.'
    }
  ]

  return (
    <section className="bg-white text-gray-900 px-5 py-24 md:py-32" id="highlights">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-5 border-b-4 w-[220px] mx-auto border-[#ab0020] pb-2">
            Highlights
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A quick snapshot of why I’m a strong fit for backend engineering roles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-[#ab0020] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


