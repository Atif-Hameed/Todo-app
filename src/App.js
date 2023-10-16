import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { SignUp } from './components/SignUp';
import Welcom from './components/Welcom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcom/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/logIn' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
