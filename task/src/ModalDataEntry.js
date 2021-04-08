import React from 'react'
import  {Button, Modal, Form} from 'react-bootstrap'

const styles = {
  table:{

  },
  row:{

  }
}

function EventEntryModal(props) {
    return (
      <Modal
      style = {styles.row}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Event Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
                <Form.Group controlId="formBasicId">
                    <Form.Label>Enter ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formBasicStall">
                    <Form.Label>Stall</Form.Label>
                    <Form.Control type="text" placeholder="Stall" />
                </Form.Group>
                
                <Form.Group controlId="formBasicEvent">
                    <Form.Label>Event</Form.Label>
                    <Form.Control type="text" placeholder="Event" />
                </Form.Group>

                <Form.Group controlId="formBasicDetail">
                    <Form.Label>Details</Form.Label>
                    <Form.Control type="text" placeholder="Details" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>        
          <Button type="red" onClick={props.onHide}>Close</Button>
          <Button variant="primary" type="submit"> Submit </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function UserButtonPress(){
    const [modalShow, setModalShow] = React.useState(false);
      return(         
        <> 
            <Button variant="primary" onClick={() => setModalShow(true)}>Add</Button>
            <EventEntryModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
      )
}

export default UserButtonPress;