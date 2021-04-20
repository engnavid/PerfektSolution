import React, { Component, useState } from 'react'
import {FaCentercode, FaFlag} from 'react-icons/fa'
import {BiRadioCircleMarked} from 'react-icons/bi'
import {Dropdown, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/DropdownItem'
import StatusChangeButton from './StatusChangeButton'
import ChangeStatusButton from './StatusChangeButton'
import EmployeeNames from './EmployeeNames'






const CorexTable = () => {

    const [status, setStatus] = useState("Hello");

    const [selectedId, setSelectedId] = useState("0");

    const [selectedName, setSelectedName] = useState("");

    const [changeStatus, setChangeStatus] = useState([
        {
            id    : '1',
            "Name": "A",
            "Roll": "Admin",
            "Status": "Available",
            "Flag": "Shape"
        },
        {
            id    : '2',
            "Name": "B",
            "Roll": "Customer",
            "Status": "Absent",
            "Flag": "Shape"
        },
        {
            id    : '3',
            "Name": "C",
            "Roll": "Admin",
            "Status": "With Customer",
            "Flag": "Shape"
        },
        {
            id    : '4',
            "Name": "D",
            "Roll": "Employee",
            "Status": "Absent",
            "Flag": "Shape"
        },
        {
            id    : '5',
            "Name": "E",
            "Roll": "Employee",
            "Status": "Break",
            "Flag": "Shape"
        },
        {
            id    : '6',
            "Name": "F",
            "Roll": "Employee",
            "Status": "Available",
            "Flag": "<i class='far fa-flag'></i>"
        },
        {
            id    : '7',
            "Name": "G",
            "Roll": "Employee",
            "Status": "Available",
            "Flag": "<i class='far fa-flag'></i>"
        }
    ]);


    const changeEmployeeStatus = (item) => {
         setStatus(item.Status)
         setSelectedName(item.Name)
         setSelectedId(item.id)
    }


    const makeChangeinStatus = (status) => {
        setChangeStatus(changeStatus.map( (task) => task.id === selectedId ?
        {...task, Status : status, } : task));
    }

    const fun = (id) => {
        setStatus({status: id},console.log("Before: ",status))
        console.log("id: ",id," Status: ",status)
    }    

    const tableStyle = {
        textAlign : 'left',
    }

    return (
            <div class="container">
                <Row style={{marginTop:'2rem', marginBottom:'2rem'}}>
                    <Col>
                        <EmployeeNames employeeName={changeStatus} changeEmployeeStatus={changeEmployeeStatus} />
                    </Col>  

                    <Col>
                        <ChangeStatusButton makeChangeinStatus={makeChangeinStatus} />
                    </Col>
                </Row>

                <div class="container">
                    <table class="table" style={tableStyle}>
                        <thead fixed>
                        <tr>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Status</th>
                            <th>Flag</th> 
                            <th>Circle</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            changeStatus.map(item => (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Roll}</td>
                                    <td>{item.Status}</td>
                                    {checkStatus(item)}
                                    <td> <FaFlag color={flagColor} size="1.4rem"/></td>
                                    <td> <BiRadioCircleMarked color={flagColor} size="1.9rem"/> </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

let flagColor = 'inherit';
function checkStatus(props){
    if( props.Status == "Available" ){
        flagColor = 'green'
    } 
    else if( props.Status == "Absent" ){
        flagColor = 'black'
    }
    else if( props.Status == "With Customer" ){
        flagColor = 'blue'
    }
    else if( props.Status == "Break" ){
        flagColor = 'yellow'
    }
}

export default CorexTable
