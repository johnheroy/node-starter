import { Container } from 'inversify'
import { HelloRepository } from './hello/HelloRepository'

var DIContainer = new Container()
DIContainer.bind<HelloRepository>(HelloRepository).toSelf().inSingletonScope()

export default DIContainer
