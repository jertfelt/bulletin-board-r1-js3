
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
