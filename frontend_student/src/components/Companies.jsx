//npm libraries
import React, { Component } from 'react';
import axios from 'axios';

//local dependenices
import Post from './Post';
import Rank from './Rank';
import '../css/Companies.css';

//material ui components
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorited: []
    };
  }
  handleClick(i) {
    //gives a shallow copy of the favorited array
    const favorites = this.state.favorited.slice();
    if(favorites[i] == null)
      favorites[i] = true;
    else
      favorites[i] = !favorites[i];
    this.setState({favorited: favorites});
    this.props.onClick(favorites);
  }
  render() {
    var rows = [];
    this.props.products.forEach((product, index) => {
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

      rows.push(<Post Name={product.Name} key={product.Name} Description={product.Description} onClick={() => this.handleClick(index)}/>);
    });
    return (
      <div>
        {rows}
      </div>
    );
  }
}

const styles = {
  block: {
    maxWidth: 150,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '250px',
    marginTop: '30px',

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
          <div>
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
            </div>
            <div>
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
              </div>
              <div>
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
      electricalEngineering: false,
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
          onClick={this.props.onClick}
        />
        <MuiThemeProvider>
          <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.props.togglePage()} />
        </MuiThemeProvider> 
      </div>
    );
  }
}

const style = {
  margin: 12,
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

/*class Test extends React.Component {
  //IMPORTANT README BEFORE WRITING
  //PLEASE MOVE THIS INTO A NEW FILE THIS FILE IS BECOMMING TOO BIG WE ARE ALL GONNA DIE IF ANY MORE CODE IS WRITTEN HERE K THANKS
  //THIS COMPONENT HAS ACCESS TO THE this.props.companies which is a list of companies that the student has selected

  constructor(props) {
    super(props);
    console.log('test props');
    console.log(this.props.companies);
  }
  render() {
    return(
      <div>
        test me k thanks
      </div>
    );
  }
}*/

export default class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      selected: [],
      hasSelected: false,
      open: false 
    };
    this.onClick = this.onClick.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/Companies')
    .then(res => {
     // console.log(res.data);
      var companies = res.data; 
     // console.log(companies);
      this.setState({companies});
    })
    .catch((error) => {
      //error getting data from server load products array for dev purposes
      var companies = PRODUCTS;
      this.setState({companies});
    });

  }

  togglePage() {
    //toggle selected prefrence
    if(this.state.selected.length < 1 || this.state.selected.length > 5) {
      this.handleOpen();
    }
    else {
      this.setState({hasSelected: !this.state.hasSelected});
    }
  }

  //argument bool array
  onClick(selected) {
    this.setState({selected: []});
    this.state.companies.forEach((company, index) => {
      if(selected[index]) {
        let arr = this.state.selected;
        arr.push(company);
       // console.log(company);
        this.setState({selected: arr});
      }
    }); 
  }

  filterSelected() {
    let arr = [];
    this.state.selected.forEach((company, index) => {
      if(!this.contains(arr, company))
        arr.push(company);
    });
    return arr;
  }
  contains(arr, company) {
    for(let i = 0; i<arr.length; i++) {
      if(arr[i] === company)
        return true;
    }
    return false;
  }

  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }

  render() {
    let div = null;
    if(!this.state.hasSelected)
      div =<FilterableProductTable products={this.state.companies} togglePage={this.togglePage} onClick={this.onClick}/>
    else 
      div = <Rank companies={this.filterSelected()}/>

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ]
    return (
      <div>
        <MuiThemeProvider>
          <Dialog
            title="Wrong number of companies selected"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          Cannot select less than 1 or more than 5 companies.
        </Dialog>
        </MuiThemeProvider>
       {div}
      </div>
    );
  }
}
