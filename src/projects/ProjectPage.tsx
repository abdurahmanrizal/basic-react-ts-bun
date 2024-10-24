import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

const ProjectPage: React.FC = () => {
  return (
    <div className='flex flex-col gap-2 mt-2'>
     <h1 className='text-center text-lg font-bold'>Project Page</h1>
     <ProjectList projects={MOCK_PROJECTS} />
    </div>
   
  );
}

export default ProjectPage;