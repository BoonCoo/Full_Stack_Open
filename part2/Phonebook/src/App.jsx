import { useState } from 'react'

const Filter = ({addFilter, newFilter, handleFilterChange}) => {
  return (
    <form onSubmit={addFilter}>
      <div> filter shown with <input id='filter' autoComplete='on' value={newFilter} onChange={handleFilterChange}/> </div>
    </form>
  )
}

const PersonForm = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => {
  return (
    <form onSubmit={addName}>
      <div> name: <input id='name' autoComplete='on' value={newName} onChange={handleNameChange}/> </div>
      <div> number: <input id='number' autoComplete='on' value={newNumber} onChange={handleNumberChange}/> </div>
      <div> <button type="submit">add</button> </div>
    </form>
  )
}
const Persons = ({filteredpersons}) => {
  return (
    <ul>
      {filteredpersons.map(person => 
        <li key = {person.id}>
          {person.name} {person.number}
        </li>
      )}
    </ul>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const filteredpersons = persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const result = persons.map(person => person.name)
    if (result.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addFilter = (event) => {
    event.preventDefault()
    event.setNewFilter('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter addFilter={addFilter} newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons filteredpersons={filteredpersons}/>
    </div>
  )
}

export default App