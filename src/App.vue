<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <img class="table" src="./assets/table.jpg" width="600px" height="400px">
        <div class="deck">
            <div class="carddiv" v-for="c in 52" :key="c">
                <card-t :cid="deck.cards[c-1].id"></card-t>
            </div>
        </div>
        <button class="shuffle" v-on:click="deck.shuffle(); shuffle_count++">Shuffle</button>
        <label>Deck has been shuffled {{ shuffle_count }} times</label>
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
            shuffle_count: 0
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
.shuffle {
    height:50px;
    width:200px;
    font-size:30px;
    display:block;
}
</style>
