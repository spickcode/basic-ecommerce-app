import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Addproduct from './pages/Addproduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        {/* da keda al sidebar ya 7ag 3ega */}
        <div className="col-2">
          <Sidebar />
        </div>
        {/* da keda al pages aly hatt3'er */}
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/add" element={<Addproduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
