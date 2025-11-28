import React from 'react'
import { skills, experiences } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Parika 👋</span>
      </h1>
      
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in India, specializing in full-stack development and technical innovation.
        </p>
      </div>

      {/* SKILLS */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className="btn-back rounded-xl"/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE TIMELINE */}
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with major IT service companies, leveling up my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 relative ml-6">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 w-1 bg-gray-300 h-full rounded-full"></div>

          {/* Experience Blocks */}
          <div className="flex flex-col gap-16 mt-12">
            {experiences.map((experience, index) => (

              <div key={index} className="relative pl-15 bg-blue-40 border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-gray-100">

                {/* Blue Dot */}
                <div className="absolute -left-3 w-8 h-8 bg-white border-1 border-gray-300 rounded-full flex justify-center items-center">
                  
                  <img
                      
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[80%] h-[80%] object-contain'
                    />
                    
                </div>
                
                
                {/* Title */}
                <h3 className="text-black text-xl font-semibold">
                  {experience.title}
                </h3>

                {/* Company */}
                <p className="text-black-500 font-medium mt-1">
                  {experience.company_name}
                </p>

                {/* Points */}
                <ul className="mt-4 list-disc ml-6 space-y-2 leading-relaxed text-slate-500">
                  
                  {experience.points.map((point, i) => (
                    <li 
                   
                      key={i}
                      className="text-slate-500 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
               
               <div className="mt-4 text-black-500  text-sm font-semibold">
                  
                  {experience.date}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-slate-200 " />
      <CTA />
    </section>
  )
}

export default About





























