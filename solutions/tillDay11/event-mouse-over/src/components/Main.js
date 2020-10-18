import React, {Component} from 'react';
import { positionGenerator } from '../utils/random-positiion-generator';
import Div from './Div';

class Main extends Component {
  state = {
    top:'',
    left:''
  }
  onMouseOver = () => {
    let {top,left} = positionGenerator();
    this.setState({top, left});
  }

  render(){
    return(
      <main>
        <div className='main-wrapper'>
          <Div
          top={this.state.top}
          left={this.state.left}
          onMouseOver={this.onMouseOver}
          />
        </div>
      </main>
    )
  }
}

export default Main;