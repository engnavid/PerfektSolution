import React from 'react'
import {Dropdown, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/DropdownItem'

const ChangeStatusButton = ({makeChangeinStatus}) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Click to Change Status
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        <DropdownItem value={"Available"} onClick={() => makeChangeinStatus("Available")}>Available</DropdownItem>
                        <DropdownItem onClick={() => makeChangeinStatus("Absent")} >Absent</DropdownItem>
                        <DropdownItem onClick={() => makeChangeinStatus("With Customer")}>With Customer</DropdownItem>
                        <DropdownItem onClick={() => makeChangeinStatus("Break")}>Break</DropdownItem>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ChangeStatusButton
