import { controller, httpGet } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { Hello } from '../entity/Hello'
import { getRepository, Repository } from 'typeorm'
import { from } from 'rxjs'

@controller('/hello')
export class HelloController {

  private repository: Repository<Hello> = getRepository(Hello)

  @httpGet('/')
  public home(req: Request, res: Response) {
    let name = req.query.name || 'World'
    let user = this.repository.create({ name: name })

    from(this.repository.insert(user))
      .subscribe((hello) => {
        res.status(200).end()
      }, (error) => {
        res.status(500).end()
      })
  }

  @httpGet('/all')
  public all(req: Request, res: Response) {
    res.status(200).end()
    from(this.repository.find())
      .subscribe((hellos: Hello[]) => { 
        console.log(JSON.stringify(hellos))
      })
  }
}

