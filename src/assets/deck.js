const Card = require('./card.js');

class Deck {
    constructor() {
        var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

        // Populate an Unshuffled Deck
        this.cards = [];
        for (var s = 0; s < suits.length; s++) {
            for (var v = 0; v < values.length; v++) {
                this.cards.push(new Card(values[v], suits[s]));
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    flipAll() {
        for (let c = 0; c < this.cards.length; c++) {
            this.cards[c].flip();
        }
    }
}

module.exports = Deck;