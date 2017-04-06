import React, { Component } from 'react';
import Post from './Post';



class ProductRow extends React.Component {
  render() {

    return (
      <tr>
         <Post Name={this.props.product.Name} Description={this.props.product.Description}  />
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];

    console.log(this.props.inStockOnly)
    this.props.products.forEach((product) => {
      if (!product.stocked && this.props.inStockOnly) {
        return;
      }

      rows.push(<ProductRow product={product} key={product.Name} />);

    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }


  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value="yo"
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          in stock
          </p>

          <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Sponsoring Visa
        </p>

      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false
    };


    this.handleInStockInput = this.handleInStockInput.bind(this);
  }



  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


/*var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];*/

var PRODUCTS = [
{
         Name: 'Facebook',
         Description: 'HEllo',
         Hiring: 'Freshman',
         SponsoringVisa: false,
         stocked: false

      },
      {
         Name: 'Google',
         Description: '123',
         Hiring: 'Freshman',
         SponsoringVisa: true,
         stocked: true

      },
];


export default class Companies extends Component {
  render() {
    return (

       <FilterableProductTable products={PRODUCTS} />

    );
  }
}
