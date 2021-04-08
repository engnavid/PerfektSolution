import React, { Component } from 'react'
import {FaFlag} from 'react-icons/fa'
import {BiRadioCircleMarked} from 'react-icons/bi'

class CorexTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div class="container">
                <div class="container">
                       <table class="table">
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
                               ))}
                           </tbody>
                       </table>
                   </div>
                </div>
        )
    }
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


const data = [
    {
        "Name": "A",
        "Roll": "Admin",
        "Status": "Available",
        "Flag": "Shape"
    },
    {
        "Name": "B",
        "Roll": "Customer",
        "Status": "Absent",
        "Flag": "Shape"
    },
    {
        "Name": "C",
        "Roll": "Admin",
        "Status": "With Customer",
        "Flag": "Shape"
    },
    {
        "Name": "D",
        "Roll": "Employee",
        "Status": "Absent",
        "Flag": "Shape"
    },
    {
        "Name": "E",
        "Roll": "Employee",
        "Status": "Break",
        "Flag": "Shape"
    },
    {
        "Name": "F",
        "Roll": "Employee",
        "Status": "Available",
        "Flag": "<i class='far fa-flag'></i>"
    }
]

// const available = data.item.filter(item => item.Status == 'Available'),
// const absent = data.item.filter(item => item.Status == 'Absent'),
// const withCustomer = data.item.filter(item => item.Status == 'With Customer'),
// const onBreak = data.item.filter(item => item.Status == 'Break'),

export default CorexTable
