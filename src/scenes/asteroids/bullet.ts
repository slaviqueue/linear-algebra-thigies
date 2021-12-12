import { Canvas } from '../../canvas/canvas'
import { GameObject } from '../../loop/game-object'
import { Vector } from '../../vector/vector'

export class Bullet extends GameObject {
  private static _velocity: number = 2

  public constructor (private _position: Vector, private readonly _direction: Vector) {
    super()
  }

  public update () {
    this._position = this._position.plus(this._direction.normalize().scale(Bullet._velocity))
  }

  public draw (canvas: Canvas) {
    canvas.drawVector(this._position, this._direction.scale(5))
  }
}
