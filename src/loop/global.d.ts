import { Object } from './object'

declare global {
  interface Window {
    __objects: Object[]
  }
}
