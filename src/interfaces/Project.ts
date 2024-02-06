// This file defines the interface, Project - which describes the atributes of a Project
// import { Feature } from "./Feature"

export type Project = {
    id: string,
    title: string,
    startDate: string,
    endDate: string,
    client: string,
    isComplete: boolean,
    description: string,
    // links: { string: string }
    // features: [Feature],
}