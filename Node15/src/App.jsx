import axios from "axios"



const App = () => {
  const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
  return <h1>axios</h1>

}
export default App



// In this code we redirect the following link of localhost "http://localhost:3001/notes" using this code npx json-server --port 3001 --watch db.json to localhost using code 'npm run dev'