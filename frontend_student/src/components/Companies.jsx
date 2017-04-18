import React, { Component } from 'react';
import Post from './Post';
import '../css/Companies.css';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class ProductRow extends React.Component {
  render() {

    return (
      <div className="aa">
        <div className="aa">
         <Post Name={this.props.product.Name} Description={this.props.product.Description}  />
         </div>
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];

    //console.log(this.props.inStockOnly)
    //console.log(this.props.international);
    console.log(this.props.FullTime);
    this.props.products.forEach((product) => {
      if (!product.SponsoringVisa && this.props.international) {
        return;
      } else if (!product.stocked && this.props.inStockOnly) {
        return;
      } else if (!product.FullTime && this.props.FullTime) {
        return;
      } else if (!product.Internships && this.props.Internships) {
        return;
      } else if (!product.Freshman && this.props.Freshman) {
        return;
      } else if (!product.Sophomore && this.props.Sophomore) {
        return;
      } else if (!product.Junior && this.props.Junior) {
        return;
      } else if (!product.Senior && this.props.Senior) {
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
    marginLeft: '40px',

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
      

       <MuiThemeProvider>
          <div className="Checkbox" style={styles.block}>
            <Checkbox 
              name = "hiring"
              label="Hiring Freshmen"
              checked={this.props.Freshman}
              onCheck={this.handleFreshmanChange}
              style={styles.checkbox} />
            <Checkbox 
              name = "hiring"
              label="Hiring Sophomores"
              checked={this.props.Sophomore}
              onCheck={this.handleSophomoreChange}
              style={styles.checkbox} />
            <Checkbox 
              name = "hiring"
              label="Hiring Juniors"
              checked={this.props.Junior}
              onCheck={this.handleJuniorChange}
              style={styles.checkbox} />
            <Checkbox 
              name = "hiring"
              label="Hiring Seniors"
              checked={this.props.Senior}
              onCheck={this.handleSeniorChange}
              style={styles.checkbox} />
            <Checkbox
              name="major" 
              label="Computer Science"
              checked={this.props.computerScience}
              onCheck={this.handleComputerScienceChange}
              style={styles.checkbox} />
            <Checkbox 
              major="major"
              label="Computer Engineering"
              checked={this.props.computerEngineering}
              onCheck={this.handleComputerEngineeringChange}
              style={styles.checkbox} />
            <Checkbox 
              name="major"
              label="Electrical Engineering"
              checked={this.props.electricalEngineering}
              onCheck={this.handleElectricalEngineeringChange}
              style={styles.checkbox} />
            <Checkbox 
              name="visa"
              label="Sponsoring Visa"
              checked={this.props.international}
              onCheck={this.handleInternationalChange}
              style={styles.checkbox} />
            <Checkbox 
              name="lookingFor"
              label="Full-time"
              checked={this.props.FullTime}
              onCheck={this.handleFullTimeChange}
              style={styles.checkbox} />
            <Checkbox 
              name="lookingFor"
              label="Internship"
              checked={this.props.Internships}
              onCheck={this.handleInternshipChange}
              style={styles.checkbox} />
            </div>

            </MuiThemeProvider>
  


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
      FullTime: false,
      Internships: false,
      Freshman: false,
      Sophomore: false,
      Junior: false,
      Senior: false,
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

  handleFullTime(FullTime) {
    this.setState({
      FullTime: FullTime
    })
  }

  handleInternship(Internships) {
    this.setState({
      Internships: Internships
    })
  }

  handleFreshman(Freshman) {
    this.setState({
      Freshman: Freshman
    })
  }

  handleSophomore(Sophomore) {
    this.setState({
      Sophomore: Sophomore
    })
  }

  handleJunior(Junior) {
    this.setState({
      Junior: Junior
    })
  }

  handleSenior(Senior) {
    this.setState({
      Senior: Senior
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
          FullTime={this.state.FullTime}
          international={this.state.international}
          Internships={this.state.Internships}
          Freshman={this.state.Freshman}
          Sophomore={this.state.Sophomore}
          Junior={this.state.Junior}
          Senior={this.state.Senior}
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
          FullTime={this.state.FullTime}
          Internships={this.state.Internships}
          Freshman={this.state.Freshman}
          Sophomore={this.state.Sophomore}
          Junior={this.state.Junior}
          Senior={this.state.Senior}
          computerScience={this.state.computerScience}
          computerEngineering={this.state.computerEngineering}
          electricalEngineering={this.state.electricalEngineering}
        />
      </div>
    );
  }
}

var PRODUCTS = [
{
         Name: 'Facebook',
         Description: 'HEllo',
         SponsoringVisa: 'Freshman',
         FullTime: true,
         Internships: true,
         Freshman: true,
         Sophomore: true,
         Junior: true,
         Senior: true,
         computerScience: true,
         computerEngineering: true,
         electricalEngineering: true,

      },
      {
         Name: 'Google',
         Description: '123',
         SponsoringVisa: false,
         FullTime: false,
         Internships: true,
         Freshman: true,
         Sophomore: true,
         Junior: false,
         Senior: false,
         computerScience: true,
         computerEngineering: false,
         electricalEngineering: true

      },
      {
         Name: 'Microsoft',
         Description: '234234',
         SponsoringVisa: true,
         FullTime: false,
         Internships: true,
         Freshman: true,
         Sophomore: true,
         Junior: true,
         Senior: false,
         computerScience: false,
         computerEngineering: true,
         electricalEngineering: true


      },
];


export default class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/Companies')
    .then(res => {
      console.log(res.data);
      var companies = res.data; 
      console.log(companies);
      this.setState({companies});
    })
    .catch((error) => {
      //error getting data from server load products array for dev purposes
      var companies = PRODUCTS;
      this.setState({companies});
    });

  }

  render() {
    return (
       <FilterableProductTable products={this.state.companies} />
    );
  }
}
