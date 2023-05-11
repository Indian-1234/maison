
import { createHashRouter, createRoutesFromElements, HashRouter, Route,Routes, RouterProvider } from 'react-router-dom';
// import Rootlayout from './layouts/Rootlayout';
import Main from './component/Main';
import Hs from './component/Hs';
import Navbar from './component/Navbar';
import LogReg from './component/LogReg'
import AboutPage from './component/AboutPage';
import HouseRegister from './component/HouseRegister'
// import Hs from './component/Hs'




// const router = createHashRouter(
//   createRoutesFromElements(
//     <> 

    
//     <Route path='/' element={<Main/>} />

//       <Route path='body' element={<Aboutpage/>}/></>
     
      
//   )
// )

function Mains() {
  return (

  <>
  <HashRouter>
    <Navbar />
    <Routes >
      
    <Route path='/' element={<Main/>} ></Route>
    <Route path='body' element={<LogReg/>}/>
    <Route path='about' element={<AboutPage/>}/>
    <Route path='houseregister' element={<HouseRegister/>}/>
    <Route path='*' element={<Hs/>}/>
    </Routes>
    </HashRouter>
    </>
  );
  }

export default Mains;
