import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const divStyle = {
  color: "white",
  textAlign: "center",
  borderRadius: "5px",
  padding: "5%"
};


const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const Title = () => (<h1 className='main-title'>30 Days of React</h1>)

const SubTitle = () => (<h3 className='sub-title'>HexaDecimal Colors</h3>)

// const HexaColor = () => <div style={{backgroundColor:{hexaColor()}}}>{hexaColor()}</div>
const Divs = (props) => {
  const propDivs = props.lists.map((element, index) => <div key={index} style={{backgroundColor:element, ...divStyle}}>{element}</div>);
  return (
    <div className='main-grid'>
      {propDivs}
    </div>

  );
}

const App = () => {
  const lists =[];
  for(let index=0; index<32; index++){
    lists.push(hexaColor());
  }
  return(
  <div className='app'>
    <Title />
    <SubTitle />
    <Divs lists={lists} />
  </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
