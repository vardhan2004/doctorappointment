
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Menu from './components/menu';
import Book from './components/book';
import Doctornew from './components/doctornew.js';
import Services from './components/services';
import Contact from './components/contact';
import Doclog from './components/doclog';
import Addproduct from './components/addproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/register' element = {<Addproduct/>}/>
          <Route path = '/book' element = {<Book/>}/>
          <Route path = '/Doctornew' element = {<Doctornew/>}/>
          <Route path = '/services' element = {<Services/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/doclog' element = {<Doclog/>}/>
          <Route path = '/doctorform' element = {<Addproduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;