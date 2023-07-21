import Navbar from "./Navbar";
import { createContext, useState } from "react";


import Footer from "./Footer";
import ReactSwitch from "react-switch";


import { Outlet } from "react-router-dom";
//import { getByDisplayValue } from "@testing-library/react";
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return ( 
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
      <div className="switch-theme">
      <label > {theme === "light" ? "dark" : "light"} </label>
      <ReactSwitch type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
    
     <Navbar />
       <Outlet />
    <Footer/>
    </div>
    </div>
    </ThemeContext.Provider>
  );
}




export default App;