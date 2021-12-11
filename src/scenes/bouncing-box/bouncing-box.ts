import { Canvas } from '../../canvas/canvas'
import { Loop } from '../../loop/loop'
import { Object } from '../../loop/object'
import { Vector } from '../../vector/vector'

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })

class BouncingBox extends Object {
  private _velocity = new Vector(0.01, 0.01)
  private _position = new Vector(0, 0)
  private _acceleration = new Vector(0.01, 0.1)

  public update () {
    this._velocity = this._velocity.plus(this._acceleration)
    this._position = this._position.plus(this._velocity)

    if (this._position.y > height) {
      this._velocity = new Vector(this._velocity.x, -this._velocity.y)
    }

    if (this._position.x > width || this._position.x < 0) {
      this._velocity = new Vector(-this._velocity.x, this._velocity.y)
    }
  }

  public draw (context: Canvas) {
    context.drawPoint(this._position)
  }
}

const box = new BouncingBox()
const loop = Loop.make(canvas)
loop.addObject(box)
loop.start()
