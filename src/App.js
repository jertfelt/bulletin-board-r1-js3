
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
function App() {

  return (
    <Router>
    <div className="App">
    <Navbar /> 
   
    <Routes>
    <Route path="/" element={<Homepage />} /> 
    <Route path='/privacy-policy' component={() => { 
     window.location.href = 'https://github.com/jertfelt/'; 
     return null;
    }}/>
     <Route path='/privacy-policy' component={() => { 
     window.location.href = 'https://github.com/jertfelt/'; 
     return null;
    }}/>
    <Route path="*" element={<NotFound />}/>
  
    </Routes>
 
    </div>
    </Router>
  );
}

export default App;
