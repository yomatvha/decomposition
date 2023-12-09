import './App.css'
import ActualNews from './components/ActualNews'
import Popular from './components/Popular'
import Search from './components/Search'

function App() {

  return (
    <div className="container">
      <ActualNews />
      <Search />
      <Popular />
    </div>
  )
}

export default App
