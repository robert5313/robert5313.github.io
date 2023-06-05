import Navbar from "./Navbar";

import Footer from "./Footer";

import { Outlet } from "react-router-dom";
//import { getByDisplayValue } from "@testing-library/react";

function App() {
  return ( 
    <div className="container">
     <Navbar />
       <Outlet />
    <Footer/>
    </div>
  );
}




export default App;