import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedItem: 'fruit',
            carsFruits: [
            {
            name: 'BMW',
            type: 'car'
            },
            {
            name: 'Apple',
            type: 'fruit'
            },
            {
            name: 'Range Rover',
            type: 'car'
            },
            {
            name: 'Grapes',
            type: 'fruit'
            },
            {
            name: 'Banana',
            type: 'fruit'
            },
            {
            name: 'Porsche',
            type: 'car'
            }
        ]
        }
    this.onChang = this.onChang.bind(this);
    }

    onChang(e){
        const value = e.target.value
        this.setState({
            selectedItem: value
         })
    }
  

    render() {
        return (
        <div className="App">

            {this.state.selectedItem}
            {/* <List carsFruits={this.state.carsFruits} onChang = {this.onChang} selectedItem = {this.state.selectedItem}/> */}
        </div>
        );
    }
}

export default App;
