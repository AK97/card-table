<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <img src="./assets/table.jpg" width="600px" height="400px">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <div v-for="card in deck.cards" :key="card.id">
            <card-t cid={{ key }}></card-t>
        </div>
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
            deck: deck
            // card_graphics: Cards,

        }
    }
}
</script>

<style>
card-t img {
    height:100px;
}
</style>
