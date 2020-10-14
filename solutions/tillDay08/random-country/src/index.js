// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import {countriesData} from './data/countries.js';

// Fuction to show month date year

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }

// User Card Component
const CountryCard = (props) => {
  
  const {name, capital, languages, population, flag, currency} = props.country;
  const lang = Array(languages).join(',');
  return (
  <div className='user-card'>
    <img src={flag} alt={name} />
    <h2>
      {name}
    </h2>
    <div className='user-card__details'>
    <h3><span>Capital: </span>{capital}</h3>
    <h3><span>Language: </span>{lang}</h3>
    <h3><span>Population: </span>{population}</h3>
    <h3><span>Currency: </span>{currency}</h3>
    </div>
  </div>
  )
}

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    // console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      
      selectCountry,
      country
    } = this.props;
    // console.log(selectCountry);
    return (
      <main>
        <div className='main-wrapper'>
          
          <CountryCard country={country} />
          <Button
            text='Select Country'
            onClick={selectCountry}
            style={buttonStyles}
          />
         
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    index: 0,
    country: countriesData[0],
  }
  // showDate = (time) => {
  //   const months = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December',
  //   ]

  //   const month = months[time.getMonth()].slice(0, 3)
  //   const year = time.getFullYear()
  //   const date = time.getDate()
  //   return ` ${month} ${date}, ${year}`
  // }

  selectCountry = () => {
    let randomIndex = Math.floor(Math.random() * countriesData.length);
    this.setState({index: randomIndex, country: countriesData[randomIndex]});
  }

  render() {
    const data = {
      welcome: 'Explore the different Countries',
      title: 'A list of countries',
      subtitle: 'Have Fun!',
      author: {
        firstName: 'Sayantan ',
        lastName: 'Sarkar',
      },
      date: 'Oct 14, 2020',
    }
    //const techs = ['HTML', 'CSS', 'JavaScript']
    // copying the author from data object to user variable using spread operator
    //const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          
          selectCountry={this.selectCountry}
          country= {this.state.country}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
