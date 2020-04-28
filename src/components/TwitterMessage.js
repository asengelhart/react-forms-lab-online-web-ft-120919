import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {input: ""};
  }

  handleChange = (e) => {
    if(e.target.value.length <= this.props.maxChars) {
      this.setState({input: e.target.value})
    } else {
      this.setState({input: e.target.value.slice(0, this.props.maxChars)})
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.input}/>
        <p>Characters remaining: {this.props.maxChars - this.state.input.length} of {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
