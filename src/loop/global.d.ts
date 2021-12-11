import { InputController } from './input-controller'

declare global {
  interface Window {
    inputController: InputController
  }
}
