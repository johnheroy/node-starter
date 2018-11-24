import { injectable } from 'inversify'
import { Hello } from './Hello'

@injectable()
export class HelloRepository {

  private hellos: Array<Hello> = new Array()

  public insert(hello: Hello) {
    this.hellos.push(hello)
  }

  public all(): Array<Hello> {
    return this.hellos.slice()
  }

  public byName(name: string): Array<Hello> {
    return this.hellos.filter((value) => {
      value.name == name
    })
  }
}
