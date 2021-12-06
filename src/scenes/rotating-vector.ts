import { Canvas } from '../canvas/canvas'
import { Loop } from '../loop/loop'
import { Vector } from '../vector/vector'

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })

let origin = new Vector(width / 2, height / 2)
let vec = new Vector(100, 100)

new Loop(() => {
  canvas.clear()
  vec = vec.rotate(0.01)
  canvas.drawVector(origin, vec)
}).start()
