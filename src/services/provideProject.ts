import { Project } from "../interfaces/Project.ts"

 export default class projectFromList {
    private static instance: Project;
        
    private constructor() {}

    public static getInstance() {
        if (this.instance) return this.instance;
    }

    public static setInstance(project: Project) {
        this.instance = project;
    }

}