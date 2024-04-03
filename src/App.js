import logo from './logo.svg';
import './App.css';
import AddStudents from './Components/AddStudents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllStuents from './Components/AllStuents';
import NavBar from './Components/NavBar';
import EditStudent from './Components/EditStudent'
function App() {
  return (
  <>
  
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<AddStudents/>}/>
    <Route path='/show-users' element={<AllStuents/>}/>
    <Route path='/edit/:id' element={<EditStudent/>}/>
  </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
