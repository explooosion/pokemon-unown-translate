import React, { Component } from 'react';
import './TranslateBox.scss';

class TranslateBox extends Component {
   constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  targethandler(e){
    this.setState({text:e.target.value});
  }

  render() {
    return (
      <div className="translate-box">
        <div className="row">
          <div className="col" datatype="source">
            <div className="translate-title">English</div>
            <textarea
              id="textSource"
              className="translate-text"
              rows="1" 
              spellCheck="false" 
              autoCapitalize="off" 
              autoComplete="off" 
              autoCorrect="off"
              onChange={(e)=>this.targethandler(e)}
            >
            </textarea>
          </div>
          <div className="col" datatype="target">
            <div className="translate-title">Unown</div>
            <textarea
              id="textTarget"
              className="translate-text"
              rows="1" 
              spellCheck="false" 
              autoCapitalize="off" 
              autoComplete="off" 
              autoCorrect="off"
              value={this.state.text}
              readOnly
            >
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default TranslateBox;
