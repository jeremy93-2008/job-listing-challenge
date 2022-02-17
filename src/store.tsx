import data from '../data/data.json'
import { atom } from 'jotai'

export interface IJob {
    id: number
    company: string
    logo: string
    new: true
    featured: true
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[]
}

export const ListOfJobs: IJob[] = data

export const FilterAtom = atom<string[]>([])
