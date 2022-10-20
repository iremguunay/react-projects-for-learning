import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
