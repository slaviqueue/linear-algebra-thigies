export class Loop {
  public constructor (private readonly fn: () => void) {}

  public start () {
    this.tick()
  }

  private tick () {
    requestAnimationFrame(() => this.tick())
    this.fn()
  }
}
