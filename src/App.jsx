


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Character from "./Components/Character";
import Home from "./Components/Home";



const router = createBrowserRouter([
  {
   
      path:"/",
      element:<Home/>


      }, 
  
  
  
  {
    path:"/character",
    element:<Character/>,
  },
 


  



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