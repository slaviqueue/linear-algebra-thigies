import { random } from 'lodash'
import { Canvas } from '../../engine/canvas/canvas'
import { Loop } from '../../engine/loop/loop'
import { GameObject } from '../../engine/loop/game-object'
import { Vector } from '../../engine/primitives/vector'

class FloatingBox extends GameObject {
  private _pos: Vector = this.randomPosition()
  private readonly _velocity: Vector = this.randomVelocity()

  public update () {
    this._pos = this._pos.plus(this._velocity)
  }

  public draw (canvas: Canvas) {
    canvas.drawPoint(this._pos, 2)
  }

  private randomPosition () {
    return new Vector(random(0, 500), random(0, 500))
  }

  private randomVelocity () {
    return new Vector(random(-0.01, 0.01, true), random(-0.01, 0.01, true))
  }
}

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })
const amountOfBoxes = 100
const boxes = Array(amountOfBoxes).fill(null).map(() => new FloatingBox())
const loop = Loop.make(canvas)
loop.start()
boxes.forEach((box) => window.world.instantiate(box))
