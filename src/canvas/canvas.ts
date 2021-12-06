import { Vector } from '../vector/vector'

type CanvasOptions = {
  width?: number
  height?: number
  background?: string
  color?: string
};

export class Canvas {
  private readonly _canvas: HTMLCanvasElement
  private readonly _context: CanvasRenderingContext2D
  private readonly _width: number = 800
  private readonly _height: number = 600
  private readonly _background = '#000000'
  private readonly _color = 'red'

  public constructor (
    selector: string,
    options: CanvasOptions = {}
  ) {
    const canvas = document.querySelector(selector)

    if (!canvas) {
      throw new Error(`No canvas found by such selector: ${selector}`)
    }

    this._canvas = canvas as HTMLCanvasElement
    this._context = this._canvas.getContext('2d')!
    this._height = options.height ?? this._height
    this._width = options.width ?? this._width
    this._background = this._background ?? options.background

    this._canvas.width = this._width
    this._canvas.height = this._height
  }

  public clear () {
    this._context.fillStyle = this._background
    this._context.fillRect(0, 0, this._width, this._height)
  }

  public drawPoint (vector: Vector, size: number = 8) {
    this._context.fillStyle = this._color
    this._context.fillRect(vector.x - size / 2, vector.y - size / 2, size, size)
  }

  public drawVector (origin: Vector, dest: Vector) {
    this._context.strokeStyle = this._color
    this._context.beginPath()
    this._context.moveTo(origin.x, origin.y)
    this._context.lineTo(origin.x + dest.x, origin.x + dest.y)
    this._context.stroke()
  }
}
