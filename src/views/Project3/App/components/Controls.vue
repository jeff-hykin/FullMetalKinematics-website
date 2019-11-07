<template>
<div>
    <h1>Robots</h1>
    <table align='center'>
        <tr v-for="bot in robots" :key='bot.id'>
            <td>Bot {{ bot.id.substring(0,4) }}</td>
            <td><button @click='removeBot(bot)' class='delete'>DELETE</button></td>
            <td>X: <input :id="`${bot.id}-x`" type='number' class='small-input' :placeholder="bot.x"></td>
            <td>Y: <input :id="`${bot.id}-y`" type='number' class='small-input' :placeholder="bot.y"></td>
            <td>k11: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 0, 0)" @input='setKVal(bot.id,0,0,$event.target.value)'></td>
            <td>k12: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 0, 1)" @input='setKVal(bot.id,0,1,$event.target.value)'></td>
            <td>k21: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 1, 0)" @input='setKVal(bot.id,1,0,$event.target.value)'></td>
            <td>k22: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 1, 1)" @input='setKVal(bot.id,1,1,$event.target.value)'></td>
            <td><button @click='saveXY(bot)'>Save XY</button></td>
        </tr>
    </table>
    <button @click='addBot'>Add Robot</button>
</div>
</template>

<script>
import { index } from 'mathjs'
import Robot from "../scripts/Robot"

export default {
    name: 'Controls',
    computed: {
    },
    methods: {
        removeBot(robot) {
            let index = this.robots.findIndex(e=>e.id == robot.id)
            this.robots.splice(index, 1)
        },
        addBot() {
            this.robots.push(new Robot(this.robotStartLocation[0], this.robotStartLocation[0], ...this.initialKMatrix))
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
    }
}
</script>

<style>

table {
    /* border: 1px solid red; */
    text-align: left;
    width: 75%;
    min-width: 250px;
    border-spacing: 0px 12px;
}

tr {
    /* margin: 4px; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

td {
    padding: 8px;
}

.small-input {
    width: 40px;
}

.delete {
    background: lightpink;
}

</style>