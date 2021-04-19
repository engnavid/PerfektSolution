import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
   

let count = 1

class Clock extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date(),
             clicks: count,
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    fun = () => {
        this.setState({
            clicks: ++count,
        })
    }

    render() {
        return (
            <div>
                <h2>Hello</h2>
                <h4>Time is: {this.state.date.toLocaleTimeString()}</h4>
                <h5>total Clicks: {this.state.clicks} </h5>
                <Button onClick={this.fun} >Click Me!</Button>
            </div>
        )
    }
}
export default Clock;
