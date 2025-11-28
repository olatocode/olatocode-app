'use client'

import Image from 'next/image'
import votevoice from '@/assets/votevoice.webp'
import googleui from '@/assets/googleui.webp'
import datavasity from '@/assets/datavasity.png'
import healthcare from '@/assets/healthcare.png'
import finsocial from '@/assets/finsocial.png'
import eventblown from '@/assets/eventblown.webp'

export default function Projects() {
  const projects = [
    {
      img: eventblown,
      title: 'EventBlown',
      desc: 'EventBlown is a platform to help event planners showcase their events online',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
      impact: 'Built scalable event management API with authentication and booking system',
      live: 'https://documenter.getpostman.com/view/19291153/UVz1MXSN',
      code: 'https://github.com/olatocode/EventBlown',
    },
    {
      img: datavasity,
      title: 'Datavasity',
      desc: 'This is a learning platform for student who want to learn tech skills',
      tech: ['WordPress', 'Elementor', 'php'],
      impact: 'Educational platform serving students with tech skill courses',
      live: 'https://datavasity.com/',
      code: '#',
    },
    {
      img: healthcare,
      title: 'Snh365healthcare',
      desc: 'This is a Health care platform where users can book an appointment with a doctor, before buying their herbal medicine.',
      tech: ['WordPress', 'Elementor', 'php'],
      impact: 'Healthcare booking system enabling appointment scheduling and medicine orders',
      live: 'https://snh-365-healthcare.org.ng/',
      code: '#',
    },
    {
      img: votevoice,
      title: 'VoteVoice',
      desc: ' An Election App. Built with ReactNative, Html & Css',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      impact: 'Mobile election application for transparent voting processes',
      live: 'https://play.google.com/store/apps/details?id=com.votevoice',
      code: 'https://github.com/olatocode',
    },
    {
      img: finsocial,
      title: 'Finsocial',
      desc: 'This platform is meant to improve user financial management in terms of investment and savings',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      impact: 'FinTech platform for financial management, investments, and savings tracking',
      live: 'https://finsocial.netlify.app/',
      code: '#',
    },
    {
      img: googleui,
      title: 'GoogleUI',
      desc: 'A simple Google UI Design using Html and Css',
      tech: ['HTML5', 'CSS3'],
      impact: 'Responsive UI clone demonstrating frontend design skills',
      live: 'https://olatocode.github.io/googleui/',
      code: 'https://github.com/olatocode/googleui',
    },
  ]

  return (
    <section className="bg-primary text-dark px-5 py-24 md:py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl text-white font-bold mb-5 border-b-4 w-[180px] border-[#ab0020] pb-2">
            Projects
          </h2>

          <p className="pb-5 text-lg text-white text-gray-700">
            Here are some of my best projects, built with JavaScript (MERN), HTML, CSS, and WordPress.
          </p>
        </div>
        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col" key={i} style={{ minHeight: '400px' }}>
              <div className="w-full h-40 flex-shrink-0">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  width={400}
                  height={160}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#ab0020] mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-3 flex-grow">{project.desc}</p>
                
                {project.impact && (
                  <p className="text-sm text-gray-600 mb-3 italic">✨ {project.impact}</p>
                )}
                
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-[#0F172A] text-white text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-[#0F172A] text-white rounded hover:bg-[#ab0020] font-bold transition cursor-pointer text-center min-w-[80px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  {project.code !== '#' ? (
                    <a
                      href={project.code}
                      className="px-4 py-2 bg-white border-2 border-[#ab0020] text-[#ab0020] rounded hover:bg-[#ab0020] hover:text-white font-bold transition cursor-pointer text-center min-w-[80px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-300 border-2 border-gray-300 text-gray-500 rounded cursor-not-allowed font-bold text-center min-w-[80px]">
                      Code
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
