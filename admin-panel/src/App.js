import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import Error from "./component/Error-404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* <Login />
      <Register /> */}
    </>
  );
}

export default App;
