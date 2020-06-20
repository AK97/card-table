class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;

        this.name = `${value} of ${suit}`;
        
        ['Spades', 'Clubs'].includes(suit)
            ? this.color = 'Black'
            : this.color = 'Red'

        // Side of card that's facing up and showing, Front or Back
        // Always default to Back, it seems that this prevents Inspect Element cheating
        this.side = 'Back';
        this.id = '0';
    }
    flip() {
        if (this.side == 'Back') {
            this.side = 'Front';
            this.id = this.value+this.suit[0];
        }
        else {
            this.side = 'Back';
            this.id = '0';
        }
    }
}

module.exports = Card;