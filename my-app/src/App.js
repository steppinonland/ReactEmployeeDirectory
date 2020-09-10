import React from 'react';
import JumbotronPage from "./components/JumbotronPage";
import TableData from "./components/TableData.js"
import { MDBContainer } from "mdbreact";


import './App.css';
// need to put in all of the app here

function App() {
  return (
    <div className="App">
      <JumbotronPage />
      <MDBContainer size="md">
        <TableData />
      </MDBContainer>
    </div>
  );
}

export default App;
