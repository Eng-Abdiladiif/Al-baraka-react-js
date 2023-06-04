import Header from "./components/Header";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vegetables from "./components/Vegetables";
import Contect from "./components/Contect";
import Sign from "./components/Sign";





function App() {
  return (

    <>
    <div className="max-w-5xl mx-auto p-5">

      < Router>

      < Header />

      < Routes >

      < Route  path="/" element ={<Home/>} />
      < Route  path="/vegetable" element ={<Vegetables/>} />
      < Route  path="/contect" element= {<Contect />} />
      < Route  path="/login" element= {<Sign />} />

      
      </Routes>


    
      
    



      
        
        
        
      
      </Router>
       

    </div>


 
 < Footer />
    
     </>
  );
}

export default App;
