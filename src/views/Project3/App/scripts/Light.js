import uuidv4 from 'uuid/v4'

class Light {
    constructor(x, y) {
        this.id = uuidv4()
        this.x = x
        this.y = y
    }

    getPos() {
        return {
            x: this.x,
            y: this.y
        }
    }
}

export default Light