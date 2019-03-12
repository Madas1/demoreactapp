import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
            <h3>List of Fruits and Cars</h3>
            <ul>
            {this.props.carsFruits.map((item) => (
                <li key={item.name}>
                    {item.name}
                </li>
            ))}
            </ul>
            <h3>Select a Filter</h3>
            <select onChange={this.props.onChang} defaultValue='fruit'>
                <option value="car">Car</option>
                <option value="fruit">Fruit</option>
            </select>
            <h3>Filtered Items</h3>
            <ul>
                {this.props.carsFruits
                .filter((item) => item.type === this.props.selectedItem)
                .map((item) => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))} 
            </ul>
            </div>
             );
    }
}
 
export default List;

