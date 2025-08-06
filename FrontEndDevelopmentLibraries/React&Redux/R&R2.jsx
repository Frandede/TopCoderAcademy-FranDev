class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.setState((state) => ({
      messages: [...state.messages, state.input],
      input: ''
    }));
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Input element */}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        
        {/* Button to submit message */}
        <button onClick={this.submitMessage}>Submit</button>
        
        {/* List of messages */}
        <ul>
          {this.state.messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    );
  }
}
