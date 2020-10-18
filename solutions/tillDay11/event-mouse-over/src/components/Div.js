import React, {Component} from 'react';
import '../styles/Div.css';

class Div extends Component {
  
  render(){
    const {top, left, onMouseOver} = this.props;
    // console.log("Top:",{top});
    // console.log
    return(
      <div className='Div' style={{top, left}} onMouseOver={onMouseOver}>
        Hover here!
      </div>
    )
  }
}

export default Div;