import React, { Component } from 'react';

class Cityname extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            cityname:'Surat'
        }
    }
    
    changecity = () =>{
        this.setState({
            cityname:'Rajkot'
        })
    } 
    
    render() {
        return (
            <div>
                <p>{this.state.cityname}</p>
                <button onClick={() => this.changecity()}>changecity</button>
            </div>
        );
    }
}

export default Cityname;