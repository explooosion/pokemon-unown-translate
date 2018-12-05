import React, { Component } from 'react';
import './TranslateBox.scss';

class TranslateBox extends Component {
   constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Pokemon',
      row: {
        height: '200px',
      },
    };
  }

  targetHandler(e){
    const length = e.target.value.split('\n').length - 4;
    const height = length > 0 ? 40 * length + 200 : 200;
    this.setState({
      text:e.target.value,
      row: {
        height: `${height}px`,
      },
    });
  }

  render() {
    return (
      <div className="translate-box">
        <div className="row">
          <div className="col" datatype="source">
            <div className="translate-title">English</div>
            <textarea
              style={this.state.row}
              id="textSource"
              className="translate-text"
              rows="1" 
              spellCheck="false" 
              autoCapitalize="off" 
              autoComplete="off" 
              autoCorrect="off"
              onChange={(e)=>this.targetHandler(e)}
              value={this.state.text}
            >
            </textarea>
          </div>
          <div className="col" datatype="target">
            <div className="translate-title">Unown</div>
            <textarea
              style={this.state.row}
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
