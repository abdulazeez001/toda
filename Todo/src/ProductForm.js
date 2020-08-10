import React from 'react';



class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      product: Object.assign({}),
      errors: {}
    };
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }
  handleSave(e) {
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}),
      errors: {}
    });
    e.preventDefault();
  }
  render() {
    return (
      <form>
        <h3>Enter your new plan</h3>
        <p>
          <label>
            Todo
            <br />
            <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}/>
          </label>
        </p>
  
        <p>
          <label>
            Priority
            <br />
            <input type="text" name="priority" onChange={this.handleChange} value={this.state.product.priority} />
          </label>
        </p>
        
        <input type="submit" value="Save" onClick={this.handleSave}/>
      </form>
    );
  }
}

export default ProductForm;