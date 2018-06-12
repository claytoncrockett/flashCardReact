import React, { Component } from 'react';
import './App.css';
import FlashForm from './FlashForm';

class App extends Component {
  state = {
    cards: [
      { id: 1, front: 'How to make moneys?', back: 'Learn Reacts good', flipped: false },
      { id: 2, front: 'How to learn react?', back: 'Lots of coffee', flipped: false },
      { id: 3, front: 'Where to find coffee?', back: 'DevPoint', flipped: false }
    ],
    count: 0,
  }

  flipCard = (card1) => {
    const { cards} = this.state
    this.setState({
      cards: cards.map(card => {
        if (card.id === card1.id) {
          return {
            ...card,
            flipped: !card.flipped
          }
        }    
        return card
      })
    })

  }


  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addCard = (front, back) => {
    const { cards } = this.state;
    const card = { front, back, id: this.getUniqId(), flipped: false }
    this.setState({ cards: [card, ...cards] });
  }
  render() {
    const { cards } = this.state
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Flash Cards</h1>
        </header>
        {cards.map((card, i) =>
          <h2 key={i}>
            {card.flipped ? card.back : card.front}
            <button onClick={() => this.flipCard(card)}>Flip Card</button>
          </h2>)}

        <FlashForm addCard={this.addCard} />
      </div>
    );
  }
}

export default App;
