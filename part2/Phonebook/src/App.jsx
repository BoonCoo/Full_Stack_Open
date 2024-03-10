import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([

  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const result = persons.map(person => person.content)
    if (result.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        content: newName,
        id: persons.length + 1,
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input id='name' autoComplete='on' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key = {person.id}>
            {person.content}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App