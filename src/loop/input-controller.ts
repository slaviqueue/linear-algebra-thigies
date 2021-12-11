export class InputController {
  private _pressedKeys: Set<string> = new Set<string>()

  public constructor () {
    this._watchKeyPresses()
  }

  public pressed (key: string) {
    return this._pressedKeys.has(key)
  }

  private _watchKeyPresses () {
    window.addEventListener('keydown', (e) => {
      this._pressedKeys.add(e.key)
    })

    window.addEventListener('keyup', (e) => {
      this._pressedKeys.delete(e.key)
    })
  }
}
