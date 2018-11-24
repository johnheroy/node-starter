import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { Request, Response } from 'express';
import { HelloRepository } from './HelloRepository'
import { Hello } from './Hello';

@controller('/hello')
export class HelloController {

  private repository: HelloRepository

  constructor(
    @inject(HelloRepository) helloRepository: HelloRepository,
  ) {
    this.repository = helloRepository
  }

  @httpGet('/')
  public home(req: Request, res: Response) {
    let name = req.query.name || 'World'
    // Save a record of the hello as well.
    this.repository.insert(new Hello(name, new Date()))
    res.send(`Hello ${name}!`)
  }

  @httpGet('/all')
  public all(req: Request, res: Response) {
    res.send(this.repository.all())
  }
}

