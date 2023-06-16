import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sitebar from './dashboardComponent/Sitebar';
import Dashboard from './Dashboard';
import ProductContent from './ProductContent';
import Category from './Category';
import Enquiry from './Enquiry';
import {FaUserCircle} from 'react-icons/fa';
import bgcover from './images/dashboarBg.png';

function App() {
  return (
    <div>
       <BrowserRouter>
          <div style={{background: "linear-gradient(90.03deg, rgba(248, 195, 1, 0.73) -20.58%, rgba(248, 195, 1, 0.2482) 99.98%)"}}>
            <div className="container user flex justify-between py-8 px-9 mb-2">
              <div>
                  <p><strong>Prajjal Saxena</strong></p>
              </div>
              <div>
                
                  <FaUserCircle style={{fontSize: "30px"}}/>
              </div>
          </div>
          </div>
         <div className="flex">
            <div className="site">
              <Sitebar/>
            </div>
            <div className="rgt-site py-4 px-4 h-[80vh]" style={{background : `url(${bgcover})no-repeat center center/cover`}}>
              <Routes>
                <Route exact path='/dashboard' element={<Dashboard/>}/>
                <Route exact path='/products' element={<ProductContent/>}/>
                <Route exact path='/category' element={<Category/>}/>
                <Route exact path='/enquiry' element={<Enquiry/>}/>
              </Routes>
            </div>
         </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
