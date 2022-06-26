import {Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './AuthComponent/Login/Login';
import ManageItems from './component/ManageItems/ManageItems';
import MyItems from './component/MyItems/MyItems';
import Header from './component/shared/Header/Header';
import Footer from './component/shared/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
