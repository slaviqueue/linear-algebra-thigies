import { Vector } from '../../engine/primitives/vector'

export class CanvasEntityBoundaries {
  private readonly _top: number
  private readonly _right: number
  private readonly _bottom: number
  private readonly _left: number

  public constructor (entityRectSize: number) {
    this._top = -entityRectSize
    this._right = window.canvasWidth + entityRectSize
    this._bottom = window.canvasHeight + entityRectSize
    this._left = -entityRectSize
  }

  public get top () {
    return this._top
  }

  public get right () {
    return this._right
  }

  public get bottom () {
    return this._bottom
  }

  public get left () {
    return this._left
  }

  public includes (position: Vector) {
    return position.y > this.top &&
      position.y < this.bottom &&
      position.x > this.left &&
      position.x < this.right
  }
}
