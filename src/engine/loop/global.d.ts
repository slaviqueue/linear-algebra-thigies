import { InputController } from './input-controller'
import { World } from './world'

declare global {
  interface Window {
    inputController: InputController
    canvasWidth: number
    canvasHeight: number
    world: World
  }
}
