import React from 'react'
import {Dropdown, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/DropdownItem'

const EmployeeNames = ( { employeeName, changeEmployeeStatus } ) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select User Name
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    {
                        employeeName.map(item => (
                            <DropdownItem value={item.Name} onSelect={() => changeEmployeeStatus(item)}>{item.Name}</DropdownItem>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default EmployeeNames
