import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Product from './components/Product';
import {render} from 'react-dom'

function App() {
  return (
    <Router>
      <div className="App">  
        <Routes>
          <Route path={'/'} element={<FeaturedProducts />} />
        <Route path={'/product/:id'} element={<Product />}/>
          
        </Routes>
      </div>
      </Router>
  );
}

export default App;
