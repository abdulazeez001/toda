import React from 'react';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }
  edit() {
    this.props.onEdit(this.props.product.id);
  }
  render() {
    var name = 
      <span style={{color: 'black'}}>
        {this.props.product.name}
      </span>;
    return (
      
      <tr >
        <td>{name}</td>
        <td>{this.props.product.priority}</td>
        <td><button onClick={this.destroy} className="text-danger">delete</button></td>
        
      </tr>
  
      
    );
  }
}

export default ProductRow;