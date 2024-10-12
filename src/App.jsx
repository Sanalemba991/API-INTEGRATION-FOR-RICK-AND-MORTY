


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Character from "./Components/Character";
import Read from "./Components/Read";
import Home from "./Components/Home";
import Episode from "./Components/Episode";

import Location from "./Components/Location";

const router = createBrowserRouter([
  {
   
      path:"/",
      element:<Home/>


      }, 
  
  
  
  {
    path:"/character",
    element:<Character/>,
  },
 
  {
    path:"/episode",
    element:<Episode/>,
  },
 
  {
    path:"/location",
    element:<Location/>,
  },
   
  {
    path:"/Read",
    element:<Read/>,
  }
 
 

  



]);
function App() {
  return (
   <div className='app'>
    <div className='container'>
       <RouterProvider router={router}/>
  </div>
   </div>)
}



export default App;