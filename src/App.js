import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Layout from "./Layout";
import "./App.css";
import Home from "./Home";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chitiet" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;