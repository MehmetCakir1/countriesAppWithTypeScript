import { BrowserRouter,Routes,Route } from "react-router-dom"
import Detail from "../pages/Detail"
import Error from "../pages/Error"
import MapWrapper from "../pages/MapWrapper"



const AppRouter = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MapWrapper/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter