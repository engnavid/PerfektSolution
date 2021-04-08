import React from 'react'
import {ListGroup} from "react-bootstrap"

const EventInfo = [
    {
        "id":1,
        "Name": "A",
        "Stall": "Apple",
        "Event": "XYZ",
        "Detail": "Here Details....."
    },
    {
        "id":2,
        "Name": "B",
        "Stall": "Ball",
        "Event": "XYZ",
        "Detail": "Here Details....."
    },
    {
        "id":3,
        "Name": "C",
        "Stall": "Cat",
        "Event": "XYZ",
        "Detail": "Here Details....."
    },
    {
        "id":4,
        "Name": "D",
        "Stall": "Doll",
        "Event": "XYZ",
        "Detail": "Here Details....."
    }
]

function EventData(props) {
        return (
            <div className="container">
                    <div class="container">
                        <table class="table">
                            <thead fixed>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Stall</th>
                                <th>Event</th>
                                <th>Detail</th> 
                            </tr>
                            </thead>
                            <tbody>
                            {
                                EventInfo.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Stall}</td>
                                        <td>{item.Event}</td>
                                        <td>{item.Detail}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>
        );
}

export default EventData;

    // function EventData(props) { 
// conditional = rendering
//     const allEventDetails = {EventInfo.map((item) => {
//                   <ListGroup.Item>Hello {item.Name}</ListGroup.Item>
//             });
////            return(allEventDetails)
// }

// const tmp => {
//     if(condition)
//     return <div>"oK"</div>
//     else
//     return <div>"Not Ok"</div>
// }

//             return (
//                 <div>
// {tmp()}
//                     <ListGroup>
//                         {
//                             EventInfo.map(item =>(
//                                 <div>
//                                     <ListGroup.Item>Hello {item.Name}</ListGroup.Item>
//                                 </div>
//                             ))
//                         }
//                     </ListGroup>
//                 </div>
//             );
// }
// export default EventData

