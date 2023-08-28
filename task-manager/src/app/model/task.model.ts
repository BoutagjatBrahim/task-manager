export enum TaskState {
    EnCours = 'En cours',
    AFaire = 'À faire',
    Termine = 'Terminé'
  }
  
  export class Task {
    title: string;
    description: string;
    etat: TaskState;
  
    constructor(title: string, description: string, etat: TaskState) {
      this.title = title;
      this.description = description;
      this.etat = etat;
    }
  }
  