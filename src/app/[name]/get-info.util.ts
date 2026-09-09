import { ProjectData } from '../project.data'
import { redirect } from 'next/navigation'
import { Project } from '../project.type'

export const getProjectInfo = (name: string): Project => {
  const project = ProjectData[name as keyof typeof ProjectData]
  if (!project) redirect('/')
  return project
}
