import { controller, httpGet, response, request, queryParam } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { Hello } from '../entity/Hello'
import { getRepository, Repository } from 'typeorm'
import { from } from 'rxjs'
import { ignoreElements } from 'rxjs/operators'

@controller('/hello')
export class HelloController {

  private repository: Repository<Hello> = getRepository(Hello)

  @httpGet('/')
  public home(
      @request() req: Request, 
      @response() res: Response,
      @queryParam('name') name: string): Promise<void> {

    name = name || 'World'
    let user = this.repository.create({ name: name })

    let observable = from(this.repository.insert(user))
    observable.subscribe((hello) => {
      res.send(`Hello ${name}`)
    }, (error) => {
      res.status(500).end()
    })

    return observable.pipe(ignoreElements()).toPromise()
  }

  @httpGet('/all')
  public all(req: Request, res: Response): Promise<void> {
    let observable = from(this.repository.find())
    observable.subscribe((hellos: Hello[]) => { 
      res.json(hellos)
    }, (error) => {
      res.status(500).end()
    })

    return observable.pipe(ignoreElements()).toPromise()
  }
}
