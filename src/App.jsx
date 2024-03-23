import { Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat';
import './App.scss'
import Landing from './Views/Landing/Landing'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/chat' element={<Chat/>} />
      </Routes>
    </div>
  )
}

export default App;