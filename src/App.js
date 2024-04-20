import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Text from './components/Text.jsx';



function App() {
  return ( 
 
  <Router>
     
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/cutiee' element={<Text/>}/>
       
       

    </Routes>
 
    
  </Router>

  );
}

export default App;