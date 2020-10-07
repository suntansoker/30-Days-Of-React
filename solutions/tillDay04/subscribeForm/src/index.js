import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const subscribe  = "SUBSCRIBE";
const signup = "Sign up with your email id to receive news and email updates";

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{subscribe}</h1>
    </div>
  </header>
);

const inputs = ['First Name', 'Last Name', 'Email'];
const inputsFormatted = inputs.map((input, index) => 
<input
key={index}
type='text'
value={input} 
readOnly />);

const SubmitButton = () => (
  <button className="submit-button">
    Subscribe
  </button>
);

const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>{signup}</p>
      <div>{inputsFormatted}</div>
      <SubmitButton />
    </div>
  </main>
);

const App = () => (
  <div className='app'>
    <Header />
    <Main />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
