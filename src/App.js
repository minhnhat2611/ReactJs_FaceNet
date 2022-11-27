import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listing from './Listing';
import Create from './Create';
import Detail from './Detail';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <h1>Product</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Listing />}></Route>
          <Route path='/products/create' element={<Create />}></Route>
          <Route path='/products/detail/:empid' element={<Detail />}></Route>
          <Route path='/products/edit/:empid' element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
