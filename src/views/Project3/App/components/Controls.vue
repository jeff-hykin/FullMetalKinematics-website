<template>
<div>
    <h1>Robots</h1>
    <table align='center'>
        <tr v-for="bot in robots" :key='bot.id'>
            <td>Bot {{ bot.id.substring(0,4) }}</td>
            <td><button @click='removeBot(bot.id)' class='delete'>DELETE</button></td>
            <td>X: <input :id="`${bot.id}-x`" type='number' class='small-input' max='800' min='0' :placeholder="bot.x"></td>
            <td>Y: <input :id="`${bot.id}-y`" type='number' class='small-input' max='600' min='0' :placeholder="bot.y"></td>
            <td>k11: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 0, 0)" @input='setKVal(bot.id,0,0,$event.target.value)'></td>
            <td>k12: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 0, 1)" @input='setKVal(bot.id,0,1,$event.target.value)'></td>
            <td>k21: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 1, 0)" @input='setKVal(bot.id,1,0,$event.target.value)'></td>
            <td>k22: <input type='number' class='small-input' step='0.5' max='10' min='-10' :value="getKVal(bot.K, 1, 1)" @input='setKVal(bot.id,1,1,$event.target.value)'></td>
            <td><button @click='saveXY(bot.id)'>Save XY</button></td>
        </tr>
    </table>
    <button @click='addBot'>Add Robot</button>
    <!-- <button @click='saveXY'>Save x,y</button> -->
</div>
</template>

<script>
import { index } from 'mathjs'

export default {
    name: 'Controls',
    computed: {
        robots: function () {
            return this.$root.robots
        }
    },
    methods: {
        removeBot(id) {
            this.$root.removeRobot(id)
        },
        addBot() {
            this.$root.addRobot(50, 50, 1, 0, 0, 1)
        },
        getKVal(K, k1, k2) {
            return K.subset(index(k1, k2))
        },
        setKVal(id, k1, k2, newVal) {
            this.$root.updateRobotKVal(id, k1, k2, newVal)
        },
        setXY(id, x, y) {
            this.$root.updateRobotXY(id, x, y)
        },
        saveXY(id){
                        
            let x = document.getElementById(`${id}-x`).value //pass id-x as param
            let y = document.getElementById(`${id}-y`).value //pass id-y as param 
            // let k11 = document.getElementById()
            // let k12 = document.getElementById()
            // let k21 = document.getElementById()
            // let k22 =  document.getElementById()

            // this.updateRobotXY(id, x, y)
            this.setXY(id, x, y)

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