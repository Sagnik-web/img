import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllIMG from './Pages/Img/AllIMG/AllIMG';
import SingleIMG from './Pages/Img/SingleIMG/SingleIMG';
import AdminImg from './Pages/Admin/IMG/AdminImg/AdminImg';
import AdminSingleIMG from './Pages/Admin/IMG/AdminSingleIMG/AdminSingleIMG';
import ContributorList from './Pages/Admin/Contributor/ContributorList/ContributorList';
import Details from './Pages/Admin/Contributor/Details/Details';
import Application from './Pages/Contributor/ Application/ Application';
import Main from './Pages/Contributor/Main/Main';
import ContributorSingleIMG from './Pages/Contributor/SingleIMG/ContributorSingleIMG';
import ContributorIMG from './Pages/Contributor/ContributorIMG/ContributorIMG';
import User from './Pages/Admin/User/User';
import Home from './Pages/Home/Home';
import Layout from './Component/Layout';

function App() {
  return (
    <div className="App">
      {/* Sagnik Biswas */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
          <Route path='/img/all' element={<Layout><AllIMG/></Layout>}/>
          <Route path='/img/single' element={<Layout><SingleIMG/></Layout>}/>

          <Route path='/contributor/application' element={<Layout><Application/></Layout>}/>
          <Route path='/contributor/main' element={<Layout><Main/></Layout>}/>
          <Route path='/contributor/single_img' element={<Layout><ContributorSingleIMG/></Layout>}/>
          <Route path='/contributor/img' element={<Layout><ContributorIMG/></Layout>}/>
          
          <Route path='/admin/img/all' element={<Layout><AdminImg/></Layout>}/>
          <Route path='/admin/img/single' element={<Layout><AdminSingleIMG/></Layout>}/>
          <Route path='/admin/contributor/list' element={<Layout><ContributorList/></Layout>}/>
          <Route path='/admin/contributor/details' element={<Layout><Details/></Layout>}/>
          <Route path='/admin/user' element={<Layout><User/></Layout>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
