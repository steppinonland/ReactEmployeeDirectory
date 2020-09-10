import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid className="header">
      <MDBContainer>
        <h2 className="display-4">Stephanie's Sorted React Table</h2>
        <p className="lead">Click on the heading to sort by that field.</p>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default JumbotronPage;