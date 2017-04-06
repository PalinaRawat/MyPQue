import React, { Component } from 'react';
import Post from './Post';
import '../css/Companies.css';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ProductRow extends React.Component {
  render() {

    return (
      <div className="aa">
         <Post Name={this.props.product.Name} Description={this.props.product.Description}  />
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];

    //console.log(this.props.inStockOnly)
    //console.log(this.props.international);
    console.log(this.props.fullTime);
    this.props.products.forEach((product) => {
      if (!product.SponsoringVisa && this.props.international) {
        return;
      } else if (!product.stocked && this.props.inStockOnly) {
        return;
      } else if (!product.fullTime && this.props.fullTime) {
        return;
      } else if (!product.internship && this.props.internship) {
        return;
      } else if (!product.freshman && this.props.freshman) {
        return;
      } else if (!product.sophomore && this.props.sophomore) {
        return;
      } else if (!product.junior && this.props.junior) {
        return;
      } else if (!product.senior && this.props.senior) {
        return;
      } else if (!product.computerScience && this.props.computerScience) {
        return;
      } else if (!product.computerEngineering && this.props.computerEngineering) {
        return;
      } else if (!product.electricalEngineering && this.props.electricalEngineering) {
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

const styles = {
  block: {
    maxWidth: 150,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '50px',

  },
  checkbox: {
    marginBottom: 16,
  },
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    this.handleInternationalChange = this.handleInternationalChange.bind(this);
    this.handleFullTimeChange = this.handleFullTimeChange.bind(this);
    this.handleInternshipChange = this.handleInternshipChange.bind(this);
    this.handleFreshmanChange = this.handleFreshmanChange.bind(this);
    this.handleSophomoreChange = this.handleSophomoreChange.bind(this);
    this.handleJuniorChange = this.handleJuniorChange.bind(this);
    this.handleSeniorChange = this.handleSeniorChange.bind(this);
    this.handleComputerScienceChange = this.handleComputerScienceChange.bind(this);
    this.handleComputerEngineeringChange = this.handleComputerEngineeringChange.bind(this);
    this.handleElectricalEngineeringChange = this.handleElectricalEngineeringChange.bind(this);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }

  handleInternationalChange(e) {
    this.props.onInternational(e.target.checked);
  }

  handleFullTimeChange(e) {
    this.props.onFullTime(e.target.checked);
  }

  handleInternshipChange(e) {
    this.props.onInternship(e.target.checked);
  }

  handleFreshmanChange(e) {
    this.props.onFreshman(e.target.checked);
  }

  handleSophomoreChange(e) {
    this.props.onSophomore(e.target.checked);
  }

  handleJuniorChange(e) {
    this.props.onJunior(e.target.checked);
  }

  handleSeniorChange(e) {
    this.props.onSenior(e.target.checked);
  }

  handleComputerScienceChange(e) {
    this.props.onComputerScience(e.target.checked);
  }

  handleComputerEngineeringChange(e) {
    this.props.onComputerEngineering(e.target.checked);
  }

  handleElectricalEngineeringChange(e) {
    this.props.onElectricalEngineering(e.target.checked);
  }

  render() {
    return (
      
       <form>
       <div className="checkboxes">
          <input
            type="checkbox"
            checked={this.props.international}
            onChange={this.handleInternationalChange}
          />
          <label >Sponsoring Visa</label>
          
        

        
        <input
          type="checkbox"
          checked={this.props.fullTime}
          onChange={this.handleFullTimeChange}
        />
         <label >Full Time</label >
      

      
      <input
        type="checkbox"
        checked={this.props.internship}
        onChange={this.handleInternshipChange}
      />
      <label >Internship</label >
    

  
    <input
      type="checkbox"
      checked={this.props.freshman}
      onChange={this.handleFreshmanChange}
    />
    <label >Hiring Freshmen</label >
  


  <input
    type="checkbox"
    checked={this.props.sophomore}
    onChange={this.handleSophomoreChange}
  />
   <label >Hiring Sophomores</label >



<input
  type="checkbox"
  checked={this.props.junior}
  onChange={this.handleJuniorChange}
/>
<label >Hiring Juniors</label >


<input
  type="checkbox"
  checked={this.props.senior}
  onChange={this.handleSeniorChange}
/>
<label >Hiring Seniors</label >

<input
  type="checkbox"
  checked={this.props.computerScience}
  onChange={this.handleComputerScienceChange}
/>
<label >Computer Science </label >



<input
  type="checkbox"
  checked={this.props.computerEngineering}
  onChange={this.handleComputerEngineeringChange}
/>
<label >Computer Engineering</label >


<input
  type="checkbox"
  checked={this.props.electricalEngineering}
  onChange={this.handleElectricalEngineeringChange}
/>

<label >Electrical Engineering</label >

      </div>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      international: false,
      fullTime: false,
      internship: false,
      freshman: false,
      sophomore: false,
      junior: false,
      senior: false,
      computerScience: false,
      computerEngineering: false,
      electricalEngineering: false
    };


    this.handleInStockInput = this.handleInStockInput.bind(this);
    this.handleInternational = this.handleInternational.bind(this);
    this.handleFullTime = this.handleFullTime.bind(this);
    this.handleInternship = this.handleInternship.bind(this);
    this.handleFreshman = this.handleFreshman.bind(this);
    this.handleSophomore = this.handleSophomore.bind(this);
    this.handleJunior = this.handleJunior.bind(this);
    this.handleSenior = this.handleSenior.bind(this);
    this.handleComputerScience = this.handleComputerScience.bind(this);
    this.handleComputerEngineering = this.handleComputerEngineering.bind(this);
    this.handleElectricalEngineering = this.handleElectricalEngineering.bind(this);
  }



  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  handleInternational(international) {
    this.setState({
      international: international
    })
  }

  handleFullTime(fullTime) {
    this.setState({
      fullTime: fullTime
    })
  }

  handleInternship(internship) {
    this.setState({
      internship: internship
    })
  }

  handleFreshman(freshman) {
    this.setState({
      freshman: freshman
    })
  }

  handleSophomore(sophomore) {
    this.setState({
      sophomore: sophomore
    })
  }

  handleJunior(junior) {
    this.setState({
      junior: junior
    })
  }

  handleSenior(senior) {
    this.setState({
      senior: senior
    })
  }

  handleComputerScience(computerScience) {
    this.setState({
      computerScience: computerScience
    })
  }

  handleComputerEngineering(computerEngineering) {
    this.setState({
      computerEngineering: computerEngineering
    })
  }

  handleElectricalEngineering(electricalEngineering) {
    this.setState({
      electricalEngineering: electricalEngineering
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          fullTime={this.state.fullTime}
          international={this.state.international}
          internship={this.state.internship}
          freshman={this.state.freshman}
          sophomore={this.state.sophomore}
          junior={this.state.junior}
          senior={this.state.senior}
          computerScience={this.state.computerScience}
          computerEngineering={this.state.computerEngineering}
          electricalEngineering={this.state.electricalEngineering}
          onInStockInput={this.handleInStockInput}
          onInternational={this.handleInternational}
          onFullTime={this.handleFullTime}
          onInternship={this.handleInternship}
          onFreshman={this.handleFreshman}
          onSophomore={this.handleSophomore}
          onJunior={this.handleJunior}
          onSenior={this.handleSenior}
          onComputerScience={this.handleComputerScience}
          onComputerEngineering={this.handleComputerEngineering}
          onElectricalEngineering={this.handleElectricalEngineering}
        />
        <ProductTable
          products={this.props.products}
          inStockOnly={this.state.inStockOnly}
          international={this.state.international}
          fullTime={this.state.fullTime}
          internship={this.state.internship}
          freshman={this.state.freshman}
          sophomore={this.state.sophomore}
          junior={this.state.junior}
          senior={this.state.senior}
          computerScience={this.state.computerScience}
          computerEngineering={this.state.computerEngineering}
          electricalEngineering={this.state.electricalEngineering}
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
         SponsoringVisa: 'Freshman',
         stocked: false,
         fullTime: true,
         internship: true,
         freshman: true,
         sophomore: true,
         junior: true,
         senior: true,
         computerScience: true,
         computerEngineering: true,
         electricalEngineering: true,

      },
      {
         Name: 'Google',
         Description: '123',
         Hiring: 'Freshman',
         SponsoringVisa: false,
         stocked: true,
         fullTime: false,
         internship: true,
         freshman: true,
         sophomore: true,
         junior: false,
         senior: false,
         computerScience: true,
         computerEngineering: false,
         electricalEngineering: true

      },
      {
         Name: 'Microsoft',
         Description: '234',
         Hiring: 'Sophomore',
         SponsoringVisa: true,
         stocked: true,
         fullTime: false,
         internship: true,
         freshman: true,
         sophomore: true,
         junior: true,
         senior: false,
         computerScience: false,
         computerEngineering: true,
         electricalEngineering: true


      },
];


export default class Companies extends Component {
  render() {
    return (

       <FilterableProductTable products={PRODUCTS} />

    );
  }
}
