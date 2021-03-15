import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Calculator from "./Calculator";
import Footer from "./Footer"


let App = () => {
  let date = new Date();

  return (
    <div>
      <Navbar
        dateProp={
          "Today is : " +
          date.getDate() +
          "/" +
          date.getMonth() +
          "/" +
          date.getFullYear()
        }
      />
      <About />
      <Calculator />
     <Footer />
     </div>
  );
};

export default App;
