import {BrowserRouter,Routes,Route} from "react-router-dom"
import AuthContext from "./Context/AuthContext";
import RequiredLogin from "./Context/RequiredLogin";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";
import Login from "./Pages/login/Login";

function App() {
  return (
   
    <AuthContext>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      {/* <Route path='/hotels/:id' element={<Hotel/>}/> */}
      <Route path='/room' element={<RequiredLogin><Hotel/></RequiredLogin>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </AuthContext>
  );
}

export default App;
