import { ProjectData } from '../project.data'
import { redirect } from 'next/navigation'

export const getProjectInfo = (name: string) => {
  switch (name) {
    case 'Moskovsky':
      return ProjectData.Moskovskyi
    case 'Federalny':
      return ProjectData.Federal
    case 'Turali':
      return ProjectData.Turali
    case 'Lermontov':
      return ProjectData.Lermontov
    default:
      redirect('/')
  }
}
