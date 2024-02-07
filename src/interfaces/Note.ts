/* This file defines the interface, Notes 
- which describes the atributes of a Feature's 
Note
*/
export interface Note {
    id: string,
    title: string,
    createdAt: number,
    noteBody: string,
}