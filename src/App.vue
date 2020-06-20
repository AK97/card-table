<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <img class="table" src="./assets/table.jpg" width="600px" height="400px">
        <div class="deck">
            <div class="carddiv" v-for="c in 52" :key="c">
                <card-t backtext="" :cid="deck.cards[c-1].id" v-on:click="deck.cards[c-1].flip()"></card-t>
            </div>
        </div>
        <button class="manip_deck" v-on:click="deck.shuffle(); shuffle_count++">Shuffle</button>
        <button class="manip_deck" v-on:click="deck.flipAll(); flip_count++">Flip All</button>
        <p>Deck has been shuffled {{ shuffle_count }} times</p>
        <p>Deck has been flipped {{ flip_count }} times</p>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import './assets/elements.cardmeister.min.js'
import Deck from './assets/deck.js'

let deck = new Deck();

export default {
    name: 'App',
    data () {
        return {
            title: 'Card Table',
            subtitle: 'Online multiplayer playing cards',
            deck: deck,
            shuffle_count: 0,
            flip_count: 0
            // card_graphics: Cards,
        }
    }
}
</script>

<style>
.table {
    display:block;
}
.carddiv {
    display: inline-block;
}
card-t img {
    height:100px;
}
.manip_deck {
    height:50px;
    width:200px;
    font-size:30px;
    display:block;
}
</style>
