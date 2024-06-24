export interface Note {
    id: number,
    date: string,
    visibility: string,
    weather: string
  }
  
  export type NewNote = Omit<Note, 'id'>
  