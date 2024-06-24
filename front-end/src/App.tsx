import { useState, useEffect } from 'react'
import { Note } from './type';
import { getAllNotes, createNote } from './noteService';


function App() {
  const [newDate, setNewDate] = useState('');
  const [newWeather, setNewWeather] = useState('');
  const [newVisibility, setNewVisibility] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getAllNotes().then(data => {
      setNotes(data)
      console.log(data)
    })
  }, [])

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault()
    createNote({ visibility: newVisibility, weather: newWeather, date: newDate }).then(data => {
      setNotes(notes.concat(data))
    })
    setNewDate('')
    setNewVisibility('')
    setNewWeather('')

  }
   return (
    <div>
      <form onSubmit={noteCreation}>
        <input
          type='date'
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)} 
        /> <br/>
        <p>visibility:</p> 
          <input
            type='radio'
            value={newVisibility}
            onChange={(event) => setNewVisibility(event.target.value)} 
          /> 
        <br/>
          <input
            type='radio'
            value={newWeather}
            onChange={(event) => setNewWeather(event.target.value)} 
          /> 

        <br/>
        <button type='submit'>add</button>
        <h1>Diary Entries</h1>
        {notes.map(note => 
          <p key={note.id}>date: {note.date} <br/> visibility: {note.visibility} <br/> weather: {note.weather}</p> 
        )}
      </form>
    </div>
   )
}

export default App
