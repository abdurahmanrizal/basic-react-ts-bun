import React from "react"
import { Project } from "./Project"
import ProjectCard from "./ProjectCard"

interface ProjectListProps {
  projects: Project[]
}
const ProjectList: React.FC<ProjectListProps> = ({projects}) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
     {projects.map((project) => (
        <div key={project.id} className="cols-sm rounded-md shadow-xl">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}
export default ProjectList