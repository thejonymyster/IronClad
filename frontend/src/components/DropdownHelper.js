import React, {useState} from 'react';

class DropdownHelper extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            language: 'english',
            message: 'message'
        };
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.message,
            language: e.target.language,
        });
    };
    render() {
      return (
        <div>
            <select language = {this.state.language}>
                <option language = "P">Pig Latin</option>
                <option language = "C">Cat Meow</option>
                <option language = "D">Dog Bark</option>
            </select>
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <div id="test">
          <p>{this.state.language}</p>
          <p>{this.state.message}</p>
          </div>
        </div>
      );
    }
  }

  export default DropdownHelper;