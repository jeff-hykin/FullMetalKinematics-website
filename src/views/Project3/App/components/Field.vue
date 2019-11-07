<template>
  <div id='field' @click='addLight'>
        <div class='light' v-for='light in lights' 
            :key="light.id" @click.stop='removeLight(light.id)' 
            :style="{ position: 'absolute', left: light.x-7.5 + 'px', bottom: light.y-7.5 + 'px' }">
        </div>

        <!-- Robots -->
        <div v-for='robot in robots' :key='robot.id'>
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
    data: function () {
        return {
            lights: []
        }
    },
    computed: {
        robots: function () {
            return this.$root.robots
        }
    },
    methods: {
        addLight(event) {
            this.lights.push(new Light(event.clientX-10, 600-event.clientY+10))
            // console.log('X:', event.clientX-10, 'Y:', 600-event.clientY+10)
        },
        removeLight(id) {
            let index = -1
            for(let i = 0; i < this.lights.length; i++) {
                if(this.lights[i].id == id) {
                index = i
                break
                }
            }
            this.lights.splice(index, 1)
        },
        antenna(senPos, bodyPos, color, thickness) {
            // sensor pos
            let x1 = senPos.x + 2.5
            let y1 = 600 - senPos.y
            // body pos
            let x2 = bodyPos.x
            let y2 = 600 - bodyPos.y
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
                transform: `rotate(${angle}deg)`
            }

            return style
        }
    },
    created() {
        setInterval(function () {
            for(let robot of this.robots) {
                robot.updateHolisticMat(1, this.lights)
                if(robot.x < 0) {
                    robot.updateXY(800, robot.y)
                }
                if(robot.y < 0) {
                    robot.updateXY(robot.x, 600)
                }
                if(robot.x > 800) {
                    robot.updateXY(0, robot.y)
                }
                if(robot.y > 600) {
                    robot.updateXY(robot.x, 0)
                }
            }
        }.bind(this), 20)
    }
}
</script>

<style>
#field {
    position: relative;
    min-width: 800px;
    min-height: 600px;
    max-width: 800px;
    max-height: 600px;
    background-color: black;
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
</style>