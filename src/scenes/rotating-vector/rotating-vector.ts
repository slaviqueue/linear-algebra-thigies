import { Canvas } from '../../engine/canvas/canvas'
import { Loop } from '../../engine/loop/loop'
import { GameObject } from '../../engine/loop/game-object'
import { Vector } from '../../engine/primitives/vector'

const width = 500
const height = 500

class RotatingVector extends GameObject {
  private readonly _origin = new Vector(width / 2, height / 2)
  private _vec = new Vector(100, 100)

  public update () {
    this._vec = this._vec.rotate(Math.PI / 100)
  }

  public draw (canvas: Canvas) {
    canvas.drawVector(this._origin, this._vec)
  }
}

const canvas = new Canvas('#canvas', { width, height })
const loop = Loop.make(canvas)
loop.start()

window.world.instantiate(new RotatingVector())
