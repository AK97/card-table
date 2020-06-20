class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;

        this.name = `${value} of ${suit}`;
        this.id = value+suit;

        ['Spades', 'Clubs'].includes(suit)
            ? this.color = 'Black'
            : this.color = 'Red'
    }
}

module.exports = Card;