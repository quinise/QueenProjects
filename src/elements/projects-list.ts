import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Project } from "../interfaces/Project.ts"

import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
// import { auth } from "../../GoogleProvider.js";
import { db } from "../../firebase.config.ts"

async function fetchProjects () {
    const projectsRef = (collection(db, "projects"));
    const queryProjects = query(projectsRef);
    const querySnapshot = await getDocs(queryProjects);
    const fetchedData: Array<Project> = [];

     return new Promise((resolve, reject) => {

        querySnapshot.forEach((doc) => {
            const incommingProject: Project = {
                id: doc.data().id,
                title: doc.data().title,
                startDate: doc.data().startDate,
                endDate: doc.data().endDate,
                client: doc.data().client,
                isComplete: doc.data().isComplete,
                description: doc.data().description,
            }
    
            fetchedData.push(incommingProject);
        });
        
        setTimeout(() =>{
            resolve(fetchedData);
            reject(new Error("Unable to fetch Projects"));
        }, 2000)

    })
}

@customElement("projects-list")
export class ProjectsList extends LitElement {
    @property({type: Array})
    projects: Project[] = [];

    private _getProjects() {

    }

    render() {
        return html `
      
        `
    }
}