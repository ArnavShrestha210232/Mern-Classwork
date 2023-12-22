import { useState } from "react"; //Exercise1

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Hari' }, { name: 'Ram' }])
  const addNote = (event) => {
    console.log(event)
  }
  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div><form onSubmit={addNote}>
      <input onChange={handleChange} value={newPerson} type="text"></input>
      <button type="submit">Add</button>
    </form>
      {persons.map((person) => (
        <p key={person.id}>{person.name}</p>
    ))}
    </div>
  )
}

export default App;