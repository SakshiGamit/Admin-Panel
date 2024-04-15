import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Error from "./component/Error-404";
import Profile from "./component/Profile";
import Contact from "./component/Contact";
import FAQ from "./component/FAQ";
import CustomerList from "./component/CustomerList";
// import CreateCustomer from "./component/CreateCustomer";
import ProductList from "./component/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<Error />} />
      
    </Routes>
  );
}
export default App;
