
import { Hello } from '../entity/Hello'
import { getRepository, Repository } from 'typeorm'
import { Controller, Get, BodyParams } from "@tsed/common";

@Controller("/hello")
export class HelloController {

  private repository: Repository<Hello> = getRepository(Hello)

  @Get('/')
  async home(@BodyParams('name') name: string) {
    name = name || 'World'
    let hello = this.repository.create({ name: name })

    return this.repository.insert(hello).then((result) => {
      return `Hello ${name}`
    })
  }

  @Get('/all')
  async all() {
    return this.repository.find()
  }
}
