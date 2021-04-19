import React, { Component, useState } from 'react'
import {FaCentercode, FaFlag} from 'react-icons/fa'
import {BiRadioCircleMarked} from 'react-icons/bi'
import {Dropdown, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/DropdownItem'






const CorexTable = () => {

    const [status, setStatus] = useState("Hello");

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


    const changeEmployeeStatus = (id) => {
        setChangeStatus(changeStatus.map( (task) => task.id === id ?
        {...task, Status : "Absent" } : task));
    }

    // const changeEmployeeStatus = (id) => {
    //     setChangeStatus(data.map( (task) => task.id === id ?
    //     {...task, Status : "Absent" } : task));
    // }

    const fun = (id) => {
        // data.map( (task) => task.id === id ?
        // {status : task.Status} : "Hello" )
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
                        {/* {states.map((state) => { return <MenuItem value={state._id}>{state.name} </MenuItem>; })} */}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select User Name
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu>
                                {
                                    changeStatus.map(item => (
                                        // <DropdownItem value={item.Name} onSelect={() => fun(item.Status)}>{item.Name}</DropdownItem>
                                        <DropdownItem value={item.Name} onSelect={() => changeEmployeeStatus(item.id)}>{item.Name}</DropdownItem>
                                    ))
                               }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>  
                    <Col>
                        {/* <Button variant="success" >{status}</Button> */}
                        <Button variant="success" >{`${status}`}</Button>
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.selectValue}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <DropdownItem >{this.selectValue}</DropdownItem>
                                { {
                                    data.map(item => (
                                            <DropdownItem value={item.id} onSelect={this.handleDropdownChange}>{item.selectValue}</DropdownItem>
                                    ))
                               } }
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Username"/>
                        </InputGroup>
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
                                // <tr key={item.id}>
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Roll}</td>
                                    <td>{item.Status}</td>
                                    {checkStatus(item)}
                                    <td> <FaFlag color={flagColor} size="1.4rem"/></td>
                                    <td> <BiRadioCircleMarked color={flagColor} size="1.9rem"/> </td>
                                </tr>
                        ))}

                        {/* {
                            data.map(item => (
                                // <tr key={item.id}>
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Roll}</td>
                                    <td>{item.Status}</td>
                                    {checkStatus(item)}
                                    <td> <FaFlag color={flagColor} size="1.4rem"/></td>
                                    <td> <BiRadioCircleMarked color={flagColor} size="1.9rem"/> </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}



// class CorexTable extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             selectValue: "Hello"
//         }
//         this.handleDropdownChange = this.handleDropdownChange.bind(this);
//     }
    
//     handleDropdownChange(e) {
//         this.setState({ selectValue: e.target.value });
//       }



//     render() {
//         return (
//             <div class="container">
//                 <Row style={{marginTop:'2rem', marginBottom:'2rem'}}>
//                     <Col>
//                         {/* {states.map((state) => { return <MenuItem value={state._id}>{state.name} </MenuItem>; })} */}
//                         <Dropdown>
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                 Select User Name
//                             </Dropdown.Toggle>
                            
//                             <Dropdown.Menu>
//                                 {
//                                     data.map(item => (
//                                         <DropdownItem value={item.Name} onSelect={this.fun}>{item.Name}</DropdownItem>
//                                     ))
//                                }
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </Col>  
//                     <Col>
//                         <Button variant="success" >Available</Button>
//                         {/* <Dropdown>
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                 {this.selectValue}
//                             </Dropdown.Toggle>

//                             <Dropdown.Menu>
//                                 <DropdownItem >{this.selectValue}</DropdownItem>
//                                 { {
//                                     data.map(item => (
//                                             <DropdownItem value={item.id} onSelect={this.handleDropdownChange}>{item.selectValue}</DropdownItem>
//                                     ))
//                                } }
//                             </Dropdown.Menu>
//                         </Dropdown> */}
//                     </Col>
//                     <Col>
//                         <InputGroup className="mb-3">
//                             <FormControl placeholder="Username"/>
//                         </InputGroup>
//                     </Col>
//                 </Row>
//                 <div class="container">
//                        <table class="table">
//                            <thead fixed>
//                            <tr>
//                                <th>Name</th>
//                                <th>Roll</th>
//                                <th>Status</th>
//                                <th>Flag</th> 
//                                <th>Circle</th>
//                            </tr>
//                            </thead>
//                            <tbody>
//                            {
//                                data.map(item => (
//                                    // <tr key={item.id}>
//                                    <tr>
//                                        <td>{item.Name}</td>
//                                        <td>{item.Roll}</td>
//                                        <td>{item.Status}</td>
//                                        {checkStatus(item)}
//                                        <td> <FaFlag color={flagColor} size="1.4rem"/></td>
//                                        <td> <BiRadioCircleMarked color={flagColor} size="1.9rem"/> </td>
//                                    </tr>
//                                ))}
//                            </tbody>
//                        </table>
//                    </div>
//                 </div>
//         )
//     }
// }

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


// const data = [
//     {
//         id    : '1',
//         "Name": "A",
//         "Roll": "Admin",
//         "Status": "Available",
//         "Flag": "Shape"
//     },
//     {
//         id    : '2',
//         "Name": "B",
//         "Roll": "Customer",
//         "Status": "Absent",
//         "Flag": "Shape"
//     },
//     {
//         id    : '3',
//         "Name": "C",
//         "Roll": "Admin",
//         "Status": "With Customer",
//         "Flag": "Shape"
//     },
//     {
//         id    : '4',
//         "Name": "D",
//         "Roll": "Employee",
//         "Status": "Absent",
//         "Flag": "Shape"
//     },
//     {
//         id    : '5',
//         "Name": "E",
//         "Roll": "Employee",
//         "Status": "Break",
//         "Flag": "Shape"
//     },
//     {
//         id    : '6',
//         "Name": "F",
//         "Roll": "Employee",
//         "Status": "Available",
//         "Flag": "<i class='far fa-flag'></i>"
//     },
//     {
//         id    : '7',
//         "Name": "G",
//         "Roll": "Employee",
//         "Status": "Available",
//         "Flag": "<i class='far fa-flag'></i>"
//     }
// ]

// const available = data.item.filter(item => item.Status == 'Available'),
// const absent = data.item.filter(item => item.Status == 'Absent'),
// const withCustomer = data.item.filter(item => item.Status == 'With Customer'),
// const onBreak = data.item.filter(item => item.Status == 'Break'),

export default CorexTable
