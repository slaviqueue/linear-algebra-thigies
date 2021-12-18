import { random } from 'lodash'
import { Canvas } from '../../canvas/canvas'
import { GameObject } from '../../loop/game-object'
import { Shape } from '../../primitives/shape'
import { Vector } from '../../primitives/vector'
import { CanvasBoundaryConstraint, IGetSetPosition } from './canvas-boundary-constraint'

export class Rock extends GameObject implements IGetSetPosition {
  private _position = new Vector(random(window.canvasWidth), random(window.canvasHeight))
  private _velocity = Vector.random(-0.5, 0.5)
  private _size = random(5, 30)
  private _shape: Shape = this._makeShape()
  private _boundaryConstraint = new CanvasBoundaryConstraint(this, this._size)

  public update () {
    this._boundaryConstraint.constrain()
    this._position = this._position.plus(this._velocity)
  }

  public draw (canvas: Canvas) {
    canvas.drawShape(this._position, this._shape)
  }

  public getPosition () {
    return this._position
  }

  public setPosition (position:Vector) {
    this._position = position
  }

  private _makeShape () {
    const amountOfPoints = random(5, 7)
    const angularOffset = 2 * Math.PI / amountOfPoints
    const points = Array(amountOfPoints).fill(null).map((_, i) => {
      const point = new Vector(Math.sin(angularOffset * i), Math.cos(angularOffset * i))
      return point.scale(this._size + random(1, 10))
    })

    const shape = new Shape(points)
    return shape
  }
}
