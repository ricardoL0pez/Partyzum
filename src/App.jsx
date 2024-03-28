import './App.scss'
import { Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat';
import Landing from './Views/Landing/Landing';
import DashBoardAdmin from './Views/DashBoardAdmin/DashBoardAdmin';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/admin' element={<DashBoardAdmin/>} />
      </Routes>
    </div>
  )
}

export default App;