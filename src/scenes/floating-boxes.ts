import { random } from 'lodash'
import { Canvas } from '../canvas/canvas'
import { Loop } from '../loop/loop'
import { Vector } from '../vector/vector'

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })

const amountOfBoxes = 100
const boxes = Array(amountOfBoxes).fill(null).map(() => {
  const randomX = random(0, 500)
  const randomY = random(0, 500)
  return new Vector(randomX, randomY)
})

const velocities = Array(amountOfBoxes).fill(null).map(() => {
  const randomY = random(-0.01, 0.01, true)
  const randomX = random(-0.01, 0.01, true)
  return new Vector(randomX, randomY)
})

new Loop(() => {
  canvas.clear()
  boxes.forEach(box => canvas.drawPoint(box, 2))
  boxes.forEach((_, i) => (boxes[i] = boxes[i].plus(velocities[i])))
}).start()
