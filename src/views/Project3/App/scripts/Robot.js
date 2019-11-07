import { create, all } from 'mathjs'
import uuidv4 from 'uuid/v4'

const math = create(all)

function distance(point1, point2) {
    return math.sqrt(math.pow(point2.x - point1.x, 2) + math.pow(point2.y - point1.y, 2))
}

class Robot {
    constructor(pos_x, pos_y, k11, k12, k21, k22) {
        this.id = uuidv4()
        this.x = pos_x
        this.y = pos_y
        this.K = math.matrix([[k11, k12],
                              [k21, k22]])
        this.w1Speed = 1
        this.w2Speed = 1
        this.wheelXOffset = -4 // pixel offset from center axis
        this.wheelYOffset = 10 // pixel offset from center axis
        this.sensorXOffset = 10 // pixel offset from center axis
        this.sensorYOffset = 40 // pixel offset from center axis
        this.holisticMatrix = math.matrix([[1, 0, pos_x],
                                           [0, 1, pos_x],
                                           [0, 0, 1]])
    }

    getTransformUpdate(timestep) {
        let w1Speed = this.w1Speed
        let w2Speed = this.w2Speed
        let wheelDistance = 2 * this.wheelYOffset
        let angVel = (w2Speed - w1Speed)/wheelDistance
        let theta = angVel*timestep
        let turningRadius = (w2Speed+w1Speed)*wheelDistance/math.abs(w2Speed-w1Speed)/2
        let deltaX = 0
        let deltaY = 0
        if (w1Speed !== w2Speed) {
            deltaX = math.sqrt(2*math.pow(turningRadius, 2)*(1-math.cos(theta)))*math.cos(theta/2.0)
            deltaY = math.sqrt(2*math.pow(turningRadius, 2)*(1-math.cos(theta)))*math.sin(theta/2.0)
        } else {
            deltaX = w1Speed*timestep
            deltaY = 0
        }

        return math.matrix([[math.cos(theta), -math.sin(theta), deltaX],
                            [math.sin(theta), math.cos(theta), deltaY],
                            [0, 0, 1]])
    }

    getSensorPositions() {
        let leftSensorPos = math.multiply(this.holisticMatrix, [[this.sensorXOffset], [this.sensorYOffset], [1]])
        let rightSensorPos = math.multiply(this.holisticMatrix, [[this.sensorXOffset], [-this.sensorYOffset], [1]])
        return [{
                    x: leftSensorPos.subset(math.index(0,0)),
                    y: leftSensorPos.subset(math.index(1,0))
                },
                {
                    x: rightSensorPos.subset(math.index(0,0)),
                    y: rightSensorPos.subset(math.index(1,0))
                }]
    }

    getWheelPositions() {
        let leftWheelPos = math.multiply(this.holisticMatrix, [[this.wheelXOffset], [this.wheelYOffset], [1]])
        let rightWheelPos = math.multiply(this.holisticMatrix, [[this.wheelXOffset], [-this.wheelYOffset], [1]])
        return [{
                    x: leftWheelPos.subset(math.index(0,0)),
                    y: leftWheelPos.subset(math.index(1,0))
                },
                {
                    x: rightWheelPos.subset(math.index(0,0)),
                    y: rightWheelPos.subset(math.index(1,0))
                }]
    }

    updateXY(new_x, new_y) {
        this.holisticMatrix.subset(math.index(0,2), new_x)
        this.holisticMatrix.subset(math.index(1,2), new_y)
        this.x = new_x
        this.y = new_y
    }

    updateWheelSpeeds(lights) {
        // Iterate through lights to sum up light intensities for each sensor
        let positions = this.getSensorPositions()
        let sen1Pos = positions[0]
        let sen2Pos = positions[1]
        let sen1Val = 0
        let sen2Val = 0
        for (let light of lights) {
            let sens1Dist = distance(sen1Pos, light.getPos())
            let sens2Dist = distance(sen2Pos, light.getPos())

            sens1Dist = sens1Dist == 0 ? 0.1 : sens1Dist
            sens2Dist = sens2Dist == 0 ? 0.1 : sens2Dist
            // Sensor 1
            sen1Val += 100.0/sens1Dist
            // Sensor 2
            sen2Val += 100.0/sens2Dist
        }
        sen1Val = math.min(sen1Val, 100)
        sen2Val = math.min(sen2Val, 100)

        let wheelSpeedMat = math.multiply(this.K, [[sen1Val], [sen2Val]])
        this.w1Speed = wheelSpeedMat.subset(math.index(0,0))
        this.w2Speed = wheelSpeedMat.subset(math.index(1,0))
    }

    updateHolisticMat(timestep, lights) {
        this.updateWheelSpeeds(lights)
        let transformUpdate =  this.getTransformUpdate(timestep)
        this.holisticMatrix = math.multiply(this.holisticMatrix, transformUpdate) 
        this.x = this.holisticMatrix.subset(math.index(0,2))
        this.y = this.holisticMatrix.subset(math.index(1,2))
    }

}

export default Robot
