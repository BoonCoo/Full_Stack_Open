import Note from './components/Note'

<<<<<<< HEAD


=======
>>>>>>> 3fea5664f20e95966a8ee1ebd0bfbddc11a770fd
const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App