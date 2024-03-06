import { db } from "../../firebase.config.ts"
import { addDoc, collection} from "firebase/firestore";
import { Project } from "../types/Project.ts"

const addProjectToDb = async (project: Project) => {
    
    const projectsRef = collection(db, "projects");
  
      await addDoc(projectsRef, {
        id: project.id,
        title: project.title,
        startDate: project.startDate,
        endDate: project.endDate,
        client: project.client,
        isComplete: project.isComplete,
        description: project.description,
        // user: auth.currentUser?.uid
      })
}
  
export { addProjectToDb };