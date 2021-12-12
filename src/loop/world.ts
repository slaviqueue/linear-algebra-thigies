import { GameObject } from './game-object'

export class World {
  private readonly _gameObjects: GameObject[] = []

  public get gameObjects () {
    return this._gameObjects
  }

  public instantiate (object: GameObject) {
    this._gameObjects.push(object)
  }

  public remove (object: GameObject) {
    const index = this._gameObjects.indexOf(object)
    if (index >= 0) {
      this._gameObjects.splice(index, 1)
    }
  }
}
