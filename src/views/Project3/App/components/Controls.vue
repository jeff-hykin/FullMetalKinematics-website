<template>
<column id=panel shadow=3 :class="['settings-panel', {panelHover}]" :style="{transform: `translateX(${global.panelHiddenPercent*100}%)`}" align-v=top>
    <h1>Robots</h1>
    <row class=bot-control shadow=2 v-for="bot in global.robots" :key='bot.id'>
        <column >
            <td>Bot {{ bot.id.substring(0,4) }}</td>
        </column>
        <column >
            <td>X: <input :id="`${bot.id}-x`" type='number' class='small-input' :placeholder="Math.floor(bot.x)"></td>
            <td>Y: <input :id="`${bot.id}-y`" type='number' class='small-input' :placeholder="Math.floor(bot.y)"></td>
        </column>
        <column >
            K:
        </column>
        <column >
            <row >
                <ui-textbox class=matrix-input type='number' step='0.5' :max='10' :min='-10' :value="getKVal(bot.K, 0, 0)" @input='setKVal(bot, 0,0,$event)'/>
                <ui-textbox class=matrix-input type='number' step='0.5' :max='10' :min='-10' :value="getKVal(bot.K, 0, 1)" @input='setKVal(bot, 0,1,$event)'/>
            </row>
            <row >
                <ui-textbox class=matrix-input type='number' step='0.5' :max='10' :min='-10' :value="getKVal(bot.K, 1, 0)" @input='setKVal(bot,1,0,$event)'/>
                <ui-textbox class=matrix-input type='number' step='0.5' :max='10' :min='-10' :value="getKVal(bot.K, 1, 1)" @input='setKVal(bot,1,1,$event)'/>
            </row>
        </column>
        <ui-button color=red class='delete' @click='removeBot(bot)'>DELETE</ui-button>
        <!-- <td><button @click='saveXY(bot)'>Save XY</button></td> -->
    </row>
    <ui-button color=primary @click='addBot'>Add Robot</ui-button>
</column>
</template>

<script>
import { index } from 'mathjs'
import Robot from "../scripts/Robot"

export default {
    name: 'Controls',
    data: ()=>({
        panelHover: false,
    }),
    computed: {
    },
    methods: {
        removeBot(robot) {
            let index = this.global.robots.findIndex(e=>e.id == robot.id)
            this.global.robots.splice(index, 1)
        },
        addBot() {
            this.global.robots.push(new Robot(this.global.robotStartLocation[0], this.global.robotStartLocation[0], ...this.global.initialKMatrix))
        },
        getKVal(K, k1, k2) {
            return K.subset(index(k1, k2))
        },
        setKVal(robot, k1, k2, newVal) {
            robot.K.subset(index(k1, k2), newVal)
        },
        saveXY(bot) {
            let x = document.getElementById(`${bot.id}-x`).value //pass id-x as param
            let y = document.getElementById(`${bot.id}-y`).value //pass id-y as param 
            bot.updateXY(x, y)
        }
    },
    created() {
        window.addEventListener('mouseover',e=>{
            this.panelHover = false
        })
        window.addEventListener('mouseout',e=>{
            this.panelHover = true
        })
    }
}
</script>

<style>

.settings-panel {
    height: 100vh;
    min-width: 40rem;
    width: 30vw;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(70%);
    transition: all 250ms ease-out;
    background: white;
    z-index: 999999;
}
.settings-panel > h1 {
    transition: all 250ms ease-out;
    margin-left:0;
}
.settings-panel:not(:hover):not(.panelHover) > h1 {
    margin-left: -50%;
}

.settings-panel:hover, .settings-panel.panelHover {
    transform: translateX(0%) !important;
}

.bot-control {
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    margin: 1rem !important;
    width: fit-content;
    background: whitesmoke;
}
.bot-control > * {
    margin: 0 1rem !important;
}

.matrix-input {
    padding: 0;
    margin: 0 ;
    text-align: center;
    background: whitesmoke;
    padding: 0 .7rem;
    width: 60px;
    min-width: fit-content;
}

tr {
    /* margin: 4px; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

td {
    padding: 8px;
}

.small-input {
    width: 4em;
}

</style>