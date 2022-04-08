import './App.css';
import { AppProvider } from './component/AppContext';
import Productlist from './component/Productlist';
import Navbar from './component/Navbar';
import Cart from './component/Cartdetail/Cart';
import { Model } from './component/Model';

import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import Detail from './component/Detail';
function App() {
  
  return (
    <AppProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Productlist />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/detail' element={<Detail />} />
        </Routes>
        <Model />
      </Router>
      
    </AppProvider>
  );
}

export default App;
