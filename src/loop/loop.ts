import { Canvas } from '../canvas/canvas'
import { Object } from './object'

export class Loop {
  private _objects: Object[] = []
  private _canvas: Canvas

  public constructor (canvas: Canvas) {
    this._canvas = canvas
  }

  public addObject (object: Object) {
    this._objects.push(object)
  }

  public start () {
    this.tick()
  }

  private tick () {
    requestAnimationFrame(() => this.tick())

    this._canvas.clear()
    this._objects.forEach((obj) => {
      obj.update()
      obj.draw(this._canvas)
    })
  }
}
