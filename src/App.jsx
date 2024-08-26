import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { supabase } from './client'
// Import your pages
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

function App() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('creators')
          .select('*')
        if (error) throw error
        setCreators(data)
      } catch (error) {
        setError('Error fetching creators: ' + error.message)
        console.error('Error fetching creators:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCreators()
  }, [])

  return (
    <Router>
      <div className="App">
        <h1>CREATORVERSE</h1>
        <Routes>
          <Route path="/" element={<ShowCreators creators={creators} loading={loading} error={error} />} />
          <Route path="/creator/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/new" element={<AddCreator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
