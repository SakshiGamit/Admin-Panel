import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import Error from "./component/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/navbar" element = {<Navbar/>} />
        <Route path="*" element = {<Error />} />
      </Routes>

      {/* <Login />
      <Register /> */}
    </>
  );
}

export default App;
