// This file defines the interface, Project - which describes the atributes of a Project
import { Feature } from "./Feature"

export interface Project {
    id: string,
    title: string,
    startDate: number,
    endDate: number,
    isComplete: boolean,
    description: string,
    links: { string: string }
    features: [Feature],
}