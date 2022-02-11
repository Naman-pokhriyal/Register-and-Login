import Login from "./components/Login";
import Register from "./components/Register";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homet from "./components/homet";
import Homes from "./components/homes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/homet" element={<Homet />} />
          <Route exact path="/homes" element={<Homes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
