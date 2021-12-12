import { Vector } from '../../vector/vector'

export interface IGetSetPosition {
  setPosition (pos: Vector): void
  getPosition (): Vector
}

type TBoundaries = {
  top: number
  right: number
  bottom: number
  left: number
}

export class CanvasBoundaryConstraint {
  private _boundaries: TBoundaries

  public constructor (private readonly entity: IGetSetPosition, private readonly rectSize: number) {
    this._boundaries = {
      top: -this.rectSize,
      right: window.canvasWidth + this.rectSize,
      bottom: window.canvasHeight + this.rectSize,
      left: -this.rectSize
    }
  }

  public constrain () {
    const pos = this.entity.getPosition()

    if (pos.y > this._boundaries.bottom) {
      this.entity.setPosition(new Vector(pos.x, this._boundaries.top))
    } else if (pos.y < this._boundaries.top) {
      this.entity.setPosition(new Vector(pos.x, this._boundaries.bottom))
    } else if (pos.x > this._boundaries.right) {
      this.entity.setPosition(new Vector(this._boundaries.left, pos.y))
    } else if (pos.x < this._boundaries.left) {
      this.entity.setPosition(new Vector(this._boundaries.right, pos.y))
    }
  }
}
