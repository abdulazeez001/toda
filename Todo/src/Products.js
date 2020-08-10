import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm';

var PRODUCTS = {
  
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      products: PRODUCTS
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }
  handleFilter(filterInput) {
    this.setState(filterInput);
  }
  saveProduct(product) {
    if (!product.id) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return { products };
    });
  }
  handleDestroy(productId) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return { products };
    });
  }
  
  render() {
    return (
      <div >
        <Filters
          filterText={this.state.filterText}
          onFilter={this.handleFilter}
        ></Filters>
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          onDestroy={this.handleDestroy}
        ></ProductTable>
        <ProductForm onSave={this.saveProduct} ></ProductForm>
      </div>
    );
  }
}

export default Products;