import { Canvas } from '../canvas/canvas'
import { Loop } from '../loop/loop'
import { Vector } from '../vector/vector'

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })

let velocity = new Vector(0.01, 0.01)
let position = new Vector(0, 0)
let acceleration = new Vector(0.01, 0.1)

new Loop(() => {
  velocity = velocity.plus(acceleration)
  position = position.plus(velocity)

  if (position.y > height) {
    velocity = new Vector(velocity.x, -velocity.y)
  }

  if (position.x > width || position.x < 0) {
    velocity = new Vector(-velocity.x, velocity.y)
  }

  canvas.clear()
  canvas.drawPoint(position)
}).start()
