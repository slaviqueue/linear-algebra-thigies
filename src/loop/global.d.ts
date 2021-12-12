import { InputController } from './input-controller'
import { Loop } from './loop'

declare global {
  interface Window {
    inputController: InputController
    canvasWidth: number
    canvasHeight: number
    loop: Loop
  }
}
