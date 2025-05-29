import { Project } from 'kvartal/app/project.type'

export const marks = (flats: Project['calculator']['flats']) => {
  return flats.sort().reduce((acc: Record<number, number>, el: number) => {
    acc[el] = el
    return acc
  }, {})
}
