// This file provides the code that reads all of the documents in the Firebase "projects" collection
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
// import { auth } from "../../GoogleProvider.js";
import { Project } from "../interfaces/Project.ts"
import { db } from "../../firebase.config.ts"

async function fetchProjects () {
    const projectsRef = (collection(db, "projects"));
    const queryProjects = query(projectsRef);
    const querySnapshot = await getDocs(queryProjects);
    const fetchedData: Array<Project> = [];

    const fetchProjectsPromise =  new Promise((resolve, reject) => {

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
    
    fetchProjectsPromise.then(function(result) {
        console.log("result in then of promise", result);
        return(result);
    }).catch(function(error) {
        console.log(`${error.message}`);
    });

}

export { fetchProjects }