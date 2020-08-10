import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }
  render() {
    return (
      <div className='form-group search-bar '>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          name="filterText"
          onChange={this.handleChange}
        />
        
      </div>
    );
  }
}

export default Filters;