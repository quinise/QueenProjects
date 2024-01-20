// This file provides the code to save a Cast type object to the Firebase Collection "casts" as a document 
import { db } from "../../firebase.config.ts"
import { addDoc, collection} from "firebase/firestore";
import { auth } from "../../GoogleProvider.tsx";
import { Project } from "../interfaces/Cast.js";

const addProjectToDb = async (project: Project) => {
    
  const projectsRef = collection(db, "casts");

    await addDoc(projectsRef, {
      id: project.id,
      title: project.newTitle,
      startDate: project.newStartDate,
      endDate: project.newEndDate,
      client: project.newClient,
      isComplete: project.newIsComplete,
      description: project.newDescription
    })
  }

  export { addProjectToDb };