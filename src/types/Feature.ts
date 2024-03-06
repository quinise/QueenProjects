/* This file defines the interface, Feature - 
which describes the atributes of a Project's 
feature properties
*/

import { Project} from "./Project"
import { Note } from "./Note"

export interface Feature {
    id: string,
    project: Project,
    title: string,
    startDate: number,
    endDate: number,
    isComplete: boolean,
    description: string,
    notes: [Note]
}