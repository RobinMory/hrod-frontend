import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get('/api/clients')
      .then(res => setClients(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.nom} ({client.email})</li>
        ))}
      </ul>
    </div>
  )
}

export default App
