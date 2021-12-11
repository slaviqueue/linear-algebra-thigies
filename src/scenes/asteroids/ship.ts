import { Canvas } from '../../canvas/canvas'
import { GameObject } from '../../loop/game-object'
import { radians } from '../../utils/radians'
import { Vector } from '../../vector/vector'

export class Ship extends GameObject {
  private _position: Vector = new Vector(0, 0)
  private _direction: Vector = new Vector(0, 1)
  private _velocity: Vector = new Vector(0, 0)
  private _acceleration: Vector = new Vector(0, 0)
  private friction: number = 0.99
  private _shipRectSize = 10
  private _boundaries = {
    top: -this._shipRectSize,
    right: window.canvasWidth + this._shipRectSize,
    bottom: window.canvasHeight + this._shipRectSize,
    left: -this._shipRectSize
  }

  public constructor (position: Vector) {
    super()
    this._position = position
  }

  public update () {
    this._handleInput()
    this._handleBoundaries()

    this._velocity = this._velocity.plus(this._acceleration).limitAbs(1)
    this._position = this._position.plus(this._velocity)
  }

  public draw (canvas: Canvas) {
    canvas.drawVector(this._position, this._direction.scale(10).rotate(radians(-30)))
    canvas.drawVector(this._position, this._direction.scale(10).rotate(radians(30)))
  }

  private _handleInput () {
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
  }

  private _handleBoundaries () {
    if (this._position.y > this._boundaries.bottom) {
      this._position = new Vector(this._position.x, this._boundaries.top)
    } else if (this._position.y < this._boundaries.top) {
      this._position = new Vector(this._position.x, this._boundaries.bottom)
    } else if (this._position.x > this._boundaries.right) {
      this._position = new Vector(this._boundaries.left, this._position.y)
    } else if (this._position.x < this._boundaries.left) {
      this._position = new Vector(this._boundaries.right, this._position.y)
    }
  }
}
