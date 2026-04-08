import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Header from './components/header/Header';
import Home from "./pages/home/Home";
import Kurs from "./pages/kurslar/Kurslar";
import Ustozlar from "./pages/ustozlar/Ustzolar";
import Online from "./pages/online/Online";

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/kurslar' element={<Kurs />} />
        <Route path='/ustozlar' element={<Ustozlar />} />
        <Route path='/online' element={<Online />} />
      </Routes>
    </div>
  );
}

export default App;