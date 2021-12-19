import { Vector } from './vector'

export class Shape {
  public constructor (private readonly _points: Vector[]) {}

  public get points () {
    return this._points
  }

  public edges () {
    const edges = []

    for (let i = 0; i < this._points.length; i++) {
      const edge = this._points[(i + 1) % this._points.length].minus(this._points[i])
      edges.push(edge)
    }

    return edges
  }

  public collidesWith (shape: Shape) {}
}
