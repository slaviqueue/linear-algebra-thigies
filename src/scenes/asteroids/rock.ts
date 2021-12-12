import { random } from 'lodash'
import { Canvas } from '../../canvas/canvas'
import { GameObject } from '../../loop/game-object'
import { Vector } from '../../vector/vector'
import { CanvasBoundaryConstraint, IGetSetPosition } from './canvas-boundary-constraint'

export class Rock extends GameObject implements IGetSetPosition {
  private _position = new Vector(100, 100)
  private _velocity = Vector.random(-0.5, 0.5)
  private _size = random(5, 20)
  private _shape: Vector[] = this._makeShape()
  private _boundaryConstraint = new CanvasBoundaryConstraint(this, this._size)

  public update () {
    this._boundaryConstraint.constrain()
    this._position = this._position.plus(this._velocity)
  }

  public draw (canvas: Canvas) {
    canvas.drawPoly(this._position, this._shape)
  }

  public getPosition () {
    return this._position
  }

  public setPosition (position:Vector) {
    this._position = position
  }

  private _makeShape () {
    const amountOfPoints = random(4, 10)
    const angularOffset = 2 * Math.PI / amountOfPoints
    const points = Array(amountOfPoints).fill(null).map((_, i) => {
      const point = new Vector(Math.sin(angularOffset * i), Math.cos(angularOffset * i))
      return point.scale(this._size + random(1, 10))
    })
    return points
  }
}
