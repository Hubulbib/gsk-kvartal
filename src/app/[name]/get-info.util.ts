import { ProjectData, ProjectType } from '../project.data'
import { redirect } from 'next/navigation'

export const getProjectInfo = (name: string) => {
  switch (name) {
    case 'Moskovsky':
      return ProjectData.Moskovsky
    case 'Federalny':
      return ProjectData.Federalny
    case 'Turali':
      return ProjectData.Turali
    case 'Lermontov':
      return ProjectData.Lermontov
    default:
      redirect('/')
  }
}
