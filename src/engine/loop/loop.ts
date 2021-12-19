import { Canvas } from '../canvas/canvas'
import { InputController } from './input-controller'
import { World } from './world'

export class Loop {
  private _started: boolean = false
  private readonly _canvas: Canvas
  private readonly _world: World = new World()

  public static make (canvas: Canvas) {
    const loop = new Loop(canvas)

    window.inputController = new InputController()
    window.canvasWidth = canvas.width
    window.canvasHeight = canvas.height
    window.world = loop._world

    return loop
  }

  private constructor (canvas: Canvas) {
    this._canvas = canvas
  }

  public get world () {
    return this._world
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
    this._world.gameObjects.forEach((obj) => {
      obj.update()
      obj.draw(this._canvas)
    })
  }
}
