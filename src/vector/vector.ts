export class Vector {
  public constructor (private readonly _x: number, private readonly _y: number) {}

  public get x () {
    return this._x
  }

  public get y () {
    return this._y
  }

  public plus (vector: Vector) {
    return new Vector(vector.x + this.x, vector.y + this.y)
  }

  public mul (vector: Vector) {
    return new Vector(vector.x * this.x, vector.y * this.y)
  }

  public scale (scalar: number) {
    return new Vector(this.x * scalar, this.y * scalar)
  }

  public dot (vector: Vector) {
    return vector.x * this.x + vector.y + this.y
  }

  public mag () {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  public limit (max: number) {
    return new Vector(Math.min(this.x, max), Math.min(this.y, max))
  }
}
