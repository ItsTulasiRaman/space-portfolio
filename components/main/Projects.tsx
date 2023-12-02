import React from 'react'
import ProjectCard from '../sub/ProjectCard'

export const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col justify-center items-center md:flex-row gap-10 px-10">
        {/* <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
        <ProjectCard
          //src="/CardImage.png"
          src='/impowercentre.png'
          title="Hospital Management and Portfolio"
          description="Crafted a secure user friendly portfolio site, streamlining hospital management processes."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Developed a personal skill portfolio with space theme in Next.js 14 and react-three-fiber for canvas."
        />
      </div>
    </div>
  )
}

export default Projects
