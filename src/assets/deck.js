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

    }
}

module.exports = Deck;