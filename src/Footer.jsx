import React from "react";
import {Container } from "reactstrap"
import "./style/footer.css"
let Footer = (props) => {
  return (
    
      <Container >
      <p className="footer-text">
       
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
       
      </p>
    </Container>
  
    
  );
};

export default Footer
