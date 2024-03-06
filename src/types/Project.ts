/*  This file defines the class, Project 
*   - which describes the atributes and methods of a Project.
*/
export class Project {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    client: string;
    isComplete: boolean;
    description: string;
    // links: { string: string }
    // features: [Feature],

    constructor(id: string, title: string, startDate: string, endDate: string, client: string, isComplete: boolean, description: string) {
        this.id = id,
        this.title = title,
        this.startDate = startDate,
        this.endDate = endDate,
        this.client = client,
        this.isComplete = isComplete,
        this.description = description
    }
}