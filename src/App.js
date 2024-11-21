import "./App.css";
import About from "./contents/About";
import Contact from "./contents/Contact";
import Market from "./contents/Market";
import { Route, NavLink, HashRouter , Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <h1>Index Display</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Market</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
