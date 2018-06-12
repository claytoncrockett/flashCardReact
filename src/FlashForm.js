import React from 'react';

class FlashForm extends React.Component {
  state = {front: '', back: ''}

  handleChange = (e) => {
    this.setState({ front: e.target.value });
  }
  handleChangeBack = (e) => {
    this.setState({ back: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.front, this.state.back);
    this.setState({ front: '', back: ''})
  }

  render() {
    const {front} = this.state
    const {back} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={front}
          front="front"
          onChange={this.handleChange}
          required 
          placeholder="Front of Card" />
        <input
          required
          placeholder="Back of Card"
          onChange={this.handleChangeBack}
          value={back}
          back="back"
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default FlashForm;