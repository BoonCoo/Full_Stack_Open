const Filter = ({addFilter, newFilter, handleFilterChange}) => {
    return (
      <form onSubmit={addFilter}>
        <div> filter shown with <input id='filter' autoComplete='on' value={newFilter} onChange={handleFilterChange}/> </div>
      </form>
    )
  }
  
  export default Filter