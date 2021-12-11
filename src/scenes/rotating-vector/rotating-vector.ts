import { Canvas } from '../../canvas/canvas'
import { Loop } from '../../loop/loop'
import { Object } from '../../loop/object'
import { Vector } from '../../vector/vector'

const width = 500
const height = 500

class RotatingVector extends Object {
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

loop.addObject(new RotatingVector())
