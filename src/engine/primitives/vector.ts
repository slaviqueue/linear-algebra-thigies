import { random } from 'lodash'

export class Vector {
  public constructor (private readonly _x: number, private readonly _y: number) {}

  public static random (min: number, max: number) {
    return new Vector(random(min, max, true), random(min, max, true))
  }

  public get x () {
    return this._x
  }

  public get y () {
    return this._y
  }

  public plus (vector: Vector) {
    return new Vector(vector.x + this.x, vector.y + this.y)
  }

  public minus (vector: Vector) {
    return new Vector(this.x - vector.x, this.y - vector.y)
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

  public limitAbs (max: number) {
    return new Vector(
      Math.sign(this.x) * Math.min(Math.abs(this.x), max),
      Math.sign(this.y) * Math.min(Math.abs(this.y), max)
    )
  }

  public normalize () {
    const mag = this.mag()
    return new Vector(this.x / mag, this.y / mag)
  }

  public setMag (mag: number) {
    return this.normalize().scale(mag)
  }

  public rotate (radians: number) {
    return new Vector(
      this.x * Math.cos(radians) - this.y * Math.sin(radians),
      this.x * Math.sin(radians) + this.y * Math.cos(radians)
    )
  }

  public rotation () {
    return Math.atan2(this.x, this.y)
  }

  public perpendicular () {
    return new Vector(-this.y, this.x)
  }
}
