import { Vector } from '../../primitives/vector'
import { CanvasEntityBoundaries } from './canvas-entity-boundaries'

export interface IGetSetPosition {
  setPosition (pos: Vector): void
  getPosition (): Vector
}

export class CanvasBoundaryConstraint {
  private _boundaries: CanvasEntityBoundaries

  public constructor (private readonly entity: IGetSetPosition, rectSize: number) {
    this._boundaries = new CanvasEntityBoundaries(rectSize)
  }

  public constrain () {
    const pos = this.entity.getPosition()
    const boundaries = this._boundaries

    if (pos.y > boundaries.bottom) {
      this.entity.setPosition(new Vector(pos.x, boundaries.top))
    } else if (pos.y < boundaries.top) {
      this.entity.setPosition(new Vector(pos.x, boundaries.bottom))
    } else if (pos.x > boundaries.right) {
      this.entity.setPosition(new Vector(boundaries.left, pos.y))
    } else if (pos.x < boundaries.left) {
      this.entity.setPosition(new Vector(boundaries.right, pos.y))
    }
  }
}
