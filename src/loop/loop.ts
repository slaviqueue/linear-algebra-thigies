import { Canvas } from '../canvas/canvas'
import { InputController } from './input-controller'
import { GameObject } from './game-object'

export class Loop {
  private _objects: GameObject[] = []
  private _canvas: Canvas

  public static make (canvas: Canvas) {
    window.inputController = new InputController()
    window.canvasWidth = canvas.width
    window.canvasHeight = canvas.height

    return new Loop(canvas)
  }

  private constructor (canvas: Canvas) {
    this._canvas = canvas
  }

  public addObject (object: GameObject) {
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
