import { ProjectData } from '../project.data'
import { redirect } from 'next/navigation'
import { Project } from '../project.type'

export const getProjectInfo = (name: string): Project => {
  switch (name) {
    case 'Moskovsky':
      return ProjectData.Moskovsky
    case 'Federalny':
      return ProjectData.Federalny
    case 'Turali':
      return ProjectData.Turali
    case 'Lermontov':
      return ProjectData.Lermontov
    case 'Broda':
      return ProjectData.Broda
    default:
      redirect('/')
  }
}
