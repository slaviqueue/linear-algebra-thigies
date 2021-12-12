import { Canvas } from '../canvas/canvas'
import { InputController } from './input-controller'
import { GameObject } from './game-object'

export class Loop {
  private _objects: GameObject[] = []
  private _canvas: Canvas
  private _started: boolean = false

  public static make (canvas: Canvas) {
    const loop = new Loop(canvas)

    window.inputController = new InputController()
    window.canvasWidth = canvas.width
    window.canvasHeight = canvas.height
    window.loop = loop

    return loop
  }

  private constructor (canvas: Canvas) {
    this._canvas = canvas
  }

  public addObject (object: GameObject) {
    this._objects.push(object)
  }

  public start () {
    if (this._started) {
      throw new Error('Loop already started')
    }

    this.tick()
    this._started = true
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
