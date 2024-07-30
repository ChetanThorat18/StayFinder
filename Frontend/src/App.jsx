import {Routes,Route} from 'react-router-dom';
import './App.css'
import Listings from './Pages/Listings'
import Show from './Pages/Show';
import New from './Pages/New';
import MainComp from './Pages/MainComp';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainComp/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/listings" element={<Listings/>} />
      <Route path="/listings/:id" element={<Show/>} />
      <Route path="/listings/new" element={<New/>} />
    </Routes>
    </>
  )
}

export default App
