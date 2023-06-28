import ProductListView from './views/ProductListView';
import ProductFormView from './views/ProductFormView';
import { BrowserRouter as Router,  Route, Routes, Redirect } from 'react-router-dom';

import './styles/App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListView />} />
        <Route path="/create" element={<ProductFormView />} />
        <Route path="/edit/:productId" element={<ProductFormView />} />
      </Routes>
    </Router>
  );
}

export default App;
