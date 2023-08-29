export enum TaskState {
  EnCours = 'En cours',
  AFaire = 'À faire',
  Termine = 'Terminé'
}

export class Task {
  title: string;
  description: string;
  etat: TaskState;
  date: Date;

  constructor(title: string, description: string, etat: TaskState, dueDate: Date) {
    this.title = title;
    this.description = description;
    this.etat = etat;
    this.date = dueDate;
  }
}
