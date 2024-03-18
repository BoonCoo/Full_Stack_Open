import { useState } from 'react'

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
  // const [newList, setNewList] = useState('')

  const addFilter = (event) => {
    event.preventDefault()
    // const list = result.filter((name) => name.toLowerCase().includes(newFilter.toLowerCase()))
    setNewFilter('')
    // setNewList(persons.map(person => person.name).filter((name) => name.toLowerCase().includes(newFilter.toLowerCase())))
  }

  const filteredpersons = persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  console.log(filteredpersons)

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
    // console.log(newFilter)
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
      <form onSubmit={addFilter}>
        <div> filter shown with <input id='filter' autoComplete='on' value={newFilter} onChange={handleFilterChange}/> </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div> name: <input id='name' autoComplete='on' value={newName} onChange={handleNameChange}/> </div>
        <div> number: <input id='number' autoComplete='on' value={newNumber} onChange={handleNumberChange}/> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredpersons.map(person => 
          <li key = {person.id}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App