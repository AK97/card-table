<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <!-- <img class="table" src="./assets/table.jpg" width="600px" height="400px"> -->
        <button class="manip_deck" v-on:click="deck.shuffle()">Shuffle</button>
        <button class="manip_deck" v-on:click="deck.flipAll()">Flip All</button>
        <div class="deck" v-dragula="p0" bag="card-bag">
            <card-t class="carddiv" v-for="c in 52" :key="c" backtext="" :cid="deck.cards[c-1].id" v-on:click="deck.flipOne(c-1)"></card-t>
            <!-- <card-t class="carddiv" cid="ah"></card-t>
            <card-t class="carddiv" cid="2h"></card-t>
            <card-t class="carddiv" cid="3h"></card-t>
            <card-t class="carddiv" cid="4h"></card-t>
            <card-t class="carddiv" cid="5h"></card-t>
            <card-t class="carddiv" cid="6h"></card-t>
            <card-t class="carddiv" cid="7h"></card-t>
            <card-t class="carddiv" cid="8h"></card-t> -->
        </div>
        <div class="hand" v-dragula="p1" bag="card-bag"></div>
        <div class="hand" v-dragula="p2" bag="card-bag"></div>
        <div class="hand" v-dragula="p3" bag="card-bag"></div>
        <div class="hand" v-dragula="p4" bag="card-bag"></div>
        <div class="mirrorStuff"></div>
        <!-- <div class="wrapper">
            <div class="container" v-dragula="colOne" bag="first-bag">
                <div v-for="text in colOne" :key="text" @click="onClick">{{text}} [click me]</div>
            </div>
            <div class="container" v-dragula="colTwo" bag="first-bag">
                <div v-for="text in colTwo" :key="text">{{text}}</div>
            </div>
        </div> -->
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

.hand, .deck {
    border: 1px solid;
}
.hand {
    width: 400px;
    height: 125px;
    display: inline-block;
}

.gu-mirror {
    display:none;
}
.gu-transit {
    opacity: 0.6;
}
</style>
