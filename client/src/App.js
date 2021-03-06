import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/register" />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
