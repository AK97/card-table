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
        var shuffled_deck = Array.from(this.cards);
        for (let i = shuffled_deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled_deck[i], shuffled_deck[j]] = [shuffled_deck[j], shuffled_deck[i]];
        }
        this.cards = shuffled_deck;
    }
    flipOne(index) {
        this.cards[index].flip();
    }
    flipAll() {
        for (let c = 0; c < this.cards.length; c++) {
            this.cards[c].flip();
        }
    }
}

module.exports = Deck;