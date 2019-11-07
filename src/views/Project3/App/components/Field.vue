<template>
    <div id='field' @click='addLight' :style="{ minWidth: `${this.global.fieldWidth}${this.global.units}`, minHeight: `${this.global.fieldHeight}${this.global.units}`, maxWidth: `${this.global.fieldWidth}${this.global.units}`, maxHeight: `${this.global.fieldHeight}${this.global.units}` }">
        <!-- Lights -->
        <div class='light' v-for='(light, index) in lights' 
            :key="light.id" @click.stop='removeLight(index)' 
            :style="{ position: 'absolute', left: light.x + 'px', bottom: light.y-global.lightSize + 'px' }">
        </div>
        
        <ui-button class=clear-lights-btn color=primary @click='clearLights'>Clear Lights</ui-button>

        <!-- Robots -->
        <div class=animate v-for='robot in global.robots' :key='robot.id'>
            <div class='wheel' 
                :key="robot.id+3"  
                :style="{ position: 'absolute', left: robot.getWheelPositions()[0].x-5 + 'px', bottom: robot.getWheelPositions()[0].y-5 + 'px' }">
            </div>
            <div class='wheel' 
                :key="robot.id+4"  
                :style="{ position: 'absolute', left: robot.getWheelPositions()[1].x-5 + 'px', bottom: robot.getWheelPositions()[1].y-5 + 'px' }">
            </div>
            <div  :id='`${robot.id}-body`'
                class='robot' 
                :key="robot.id"  
                :style="{ position: 'absolute', left: robot.x-15/2 + 'px', bottom: robot.y-15/2 + 'px' }">
            </div>
            <div :id='`${robot.id}-s1`' 
                class='sensor'
                :key="robot.id+2"  
                :style="{ position: 'absolute', left: robot.getSensorPositions()[0].x + 'px', bottom: robot.getSensorPositions()[0].y-2.5 + 'px' }">
            </div>
            <div :id='`${robot.id}-s2`' 
                class='sensor'
                :key="robot.id+1"  
                :style="{ position: 'absolute', left: robot.getSensorPositions()[1].x + 'px', bottom: robot.getSensorPositions()[1].y-2.5 + 'px' }">
            </div>

            <div :id='`${robot.id}-sen1-attachment`' :style="antenna(robot.getSensorPositions()[0], robot, 'white', 2)"></div>
            <div :id='`${robot.id}-sen2-attachment`' :style="antenna(robot.getSensorPositions()[1], robot, 'white', 2)"></div>

        </div>
    </div>
</template>

<script>
import Light from '../scripts/Light'


export default {
    name: 'Field',
    data: ()=>({
        lights: [],
    }),
    computed: {
    },
    methods: {
        clearLights() {
            setTimeout(() => {
                this.lights = []
            }, this.global.updateInterval+1)
        },
        addLight(event) {
            this.lights.push(new Light(event.clientX-10, this.global.fieldHeight-event.clientY+10))
        },
        removeLight(index) {
            this.lights.splice(index, 1)
        },
        antenna(senPos, bodyPos, color, thickness) {
            // sensor pos
            let x1 = senPos.x + 2.5
            let y1 = this.global.fieldHeight - senPos.y
            // body pos
            let x2 = bodyPos.x
            let y2 = this.global.fieldHeight - bodyPos.y
            // distance
            let length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)))
            // center
            let cx = ((x1 + x2) / 2) - (length / 2)
            let cy = ((y1 + y2) / 2) - (thickness / 2)
            // angle
            // var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI)
            let angle = Math.atan2((y2-y1),(x2-x1))*(180/Math.PI)

            let style = {
                padding: '0px',
                margin: '0px', 
                height: `${thickness}px`, 
                backgroundColor: `${color}`, 
                lineHeight: '1px', 
                position: 'absolute', 
                left: `${cx}px`, 
                top: `${cy}px`, 
                width: `${length}px`,
                transform: `rotate(${angle}deg)`,
            }

            return style
        }
    },
    created() {
        // the update loop
        setInterval(()=>{
            for(let robot of this.global.robots) {
                // get the new robot position
                robot.updateHolisticMat(this.global.speed, this.lights)
                // teleport the robot when it goes out of bounds
                if(robot.x < 0                     ) { robot.updateXY( this.global.fieldWidth, robot.y               ) }
                if(robot.y < 0                     ) { robot.updateXY( robot.x             , this.global.fieldHeight ) }
                if(robot.x > this.global.fieldWidth  ) { robot.updateXY( 0                   , robot.y               ) }
                if(robot.y > this.global.fieldHeight ) { robot.updateXY( robot.x             , 0                     ) }
            }
        }, this.updateInterval)
    }
}
</script>

<style>
#field {
    position: fixed;
    background-color: var(--grey-700);
    left: 0;
    top: 0;
}

.clear-lights-btn {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
}

.light {
    height: 15px;
    width: 15px;
    background-color: yellow;
    border-radius: 50%;
    display: inline-block;
}

.robot {
    height: 15px;
    width: 15px;
    background-color: lightgrey;
    border-radius: 50%;
    display: inline-block;
}

.sensor {
    height: 5px;
    width: 5px;
    background-color: lightblue;
    border-radius: 50%;
    display: inline-block;
}
.wheel {
    height: 10px;
    width: 10px;
    background-color: lightcoral;
    border-radius: 50%;
    display: inline-block;
}
.animate {
    transition: all 30ms ease;
}
</style>