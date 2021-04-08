import './App.css';
import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Navbar from './Navbar'
import Footer from './Footer'
import EventData from './EventData'
import UserButtonPress from './ModalDataEntry'
import CorexTable from './CorexTable';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Row> */}
        {/* <Col> */}
          <CorexTable />
        {/* </Col> */}
        {/* <Col> */}
          {/* <UserButtonPress /> */}
        {/* </Col> */}
      {/* </Row> */}
      <Footer style={{marginTop: "100", paddingTop:"5"}} />
    </div>
  );
}

export default App;
