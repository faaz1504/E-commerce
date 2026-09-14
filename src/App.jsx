import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Admin/Reg/Register';
import AdminSidebar from './pages/Admin/AdminSidebar';
import AdminNavbar from './pages/Admin/AdminNavbar';
import AdminDashboard from './pages/Admin/AdminDashboard';
// import NavBar from './components/Navbar';
import AddProduct from './pages/Admin/AddProducts';
import ViewUsers from './pages/Admin/Viewuser';
import ViewProducts from './pages/Admin/Viewproducts';
import DashBoardHome from './pages/Admin/DashBoardHome';
import SignIn from './pages/Admin/Reg/Sign-In';
import UserNavbar from './pages/User/UserNavbar';
import Home from './pages/User/Home';
import UserCart from './pages/User/User-Cart';
import Userlayout from './pages/User/UserLayout';
import Products from './pages/User/Products';
import Profile from './pages/User/Profile';
import EditProduct from './pages/Admin/editProduct';
import ProtectedRoute from './components/ProtectedRoute';

function App(){

  return(

    <div>

      <BrowserRouter>

      
      

        <Routes>

          

          
          
          {/* User */}

          <Route  element={<Userlayout/>}>

          <Route path='/' element={<Home/>}/>

          <Route path='/user-nav' element={<UserNavbar/>}/>

          <Route path='/User-cart' element={<UserCart/>}/>

          <Route path='/products' element={<Products/>}/>

          <Route path='/profile' 
          element={
            <ProtectedRoute role='user'>
              <Profile/>
            </ProtectedRoute>
          }/>

          <Route path='/register' element={<Register/>}/>

          <Route path='/sign-in' element={<SignIn/>}/>

          </Route>

          
          {/* Admin */}      

          <Route path='/adminnav' element={<AdminNavbar/>}/>

          <Route path='/adminsidebar' element={<AdminSidebar/>}/>

          {/* wrapped route  */}
          <Route path='/AdminDashboard' 
          element={
            <ProtectedRoute role='admin'>
              <AdminDashboard/>
            </ProtectedRoute>
            }
            >


          <Route path='dash-home'
                 element={<DashBoardHome/>}/>
          
          <Route path='add-product'
                 element={<AddProduct/>}/>

          <Route path='users'
                 element={<ViewUsers/>}/>

          <Route path='view-products'
                 element={<ViewProducts/>}/>

          <Route path='edit-product/:id'
                 element={<EditProduct/>}/>
                 
          </Route>

        

        </Routes>

      </BrowserRouter>

    </div>

  )

}
export default App;