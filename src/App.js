import {Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import ManageItems from './component/ManageItems/ManageItems';
import MyItems from './component/MyItems/MyItems';
import Header from './component/shared/Header/Header';
import NotFound from './component/shared/NotFound/NotFound';
import InventoryId from './component/Home/InventoryId/InventoryId';
import SignIn from './AuthComponent/SignIn/SignIn';
import SignUp from './AuthComponent/SignUp/SignUp';
import RequireAuth from './AuthComponent/RequireAuth/Requireauth';
import AddItem from './component/AddItem/AddItem';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryId></InventoryId>
          </RequireAuth>
        }></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }>
         </Route>
          <Route path='/addItems' element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
        }></Route>
       
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
