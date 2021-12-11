import { Canvas } from '../../canvas/canvas'
import { Object } from '../../loop/object'
import { radians } from '../../utils/radians'
import { Vector } from '../../vector/vector'

export class Ship extends Object {
  private _position: Vector = new Vector(0, 0)
  private _direction: Vector = new Vector(0, 1)
  private _velocity: Vector = new Vector(0, 0)
  private _acceleration: Vector = new Vector(0, 0)
  private friction: number = 0.99

  public constructor (position: Vector) {
    super()
    this._position = position
  }

  public update () {
    if (window.inputController.pressed('w')) {
      this._acceleration = this._direction.scale(0.02)
    } else {
      this._acceleration = this._acceleration.scale(0.1)
      this._velocity = this._velocity.scale(this.friction)
    }

    if (window.inputController.pressed('a')) {
      this._direction = this._direction.rotate(-Math.PI / 100).normalize()
    } else if (window.inputController.pressed('d')) {
      this._direction = this._direction.rotate(Math.PI / 100).normalize()
    }

    this._velocity = this._velocity.plus(this._acceleration).limitAbs(1)
    this._position = this._position.plus(this._velocity)
  }

  public draw (canvas: Canvas) {
    canvas.drawVector(this._position, this._direction.scale(10).rotate(radians(-30)))
    canvas.drawVector(this._position, this._direction.scale(10).rotate(radians(30)))
  }
}
