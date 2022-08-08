import React, { Component } from 'react';

class countryname extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            countryname:'INDIA'
        }
    }
    
    changecountry = () =>{
        this.setState({
            countryname:'CANADA'
        })
    } 
    
    render() {
        return (
            <div>
                <p>{this.state.countryname}</p>
                <button onClick={() => this.changecountry()}>change country</button>
            </div>
        );
    }
}

// export default curntry;