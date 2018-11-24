import { inject, injectable } from 'inversify'
import { Request, Response } from 'express';
import { HelloRepository } from './HelloRepository'
import { HelloManager } from './HelloManager'

@injectable()
export class HelloRouter {
  // Can I make these private?
  protected repository: HelloRepository
  protected manager: HelloManager

  private hellos: String[] = new Array<String>() // TODO: move this to repository

  constructor(
    @inject(HelloRepository) helloRepository: HelloRepository,
    @inject(HelloManager) helloManager: HelloManager,
  ) {
    this.repository = helloRepository
    this.manager = helloManager
  }

  public home(req: Request, res: Response) {
    let name = req.query.name || 'World'
    res.send(`Hello ${name}!`)
  }
}
