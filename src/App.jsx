import './App.css'
import DataProvider from './components/dataProvider'
import Home from './components/home'

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App
