import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
// import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Register from "./component/Register";
import Error from "./component/Error-404";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
