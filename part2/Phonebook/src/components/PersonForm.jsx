const PersonForm = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return (
      <form onSubmit={addName}>
        <div> name: <input id='name' autoComplete='on' value={newName} onChange={handleNameChange}/> </div>
        <div> number: <input id='number' autoComplete='on' value={newNumber} onChange={handleNumberChange}/> </div>
        <div> <button type="submit">add</button> </div>
      </form>
    )
  }
  
  export default PersonForm