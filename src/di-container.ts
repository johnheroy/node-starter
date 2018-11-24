import { Container } from 'inversify'
import { HelloRepository } from './hello/HelloRepository'
import { HelloManager } from './hello/HelloManager'

var DIContainer = new Container()
DIContainer.bind<HelloRepository>(HelloRepository).toSelf()
DIContainer.bind<HelloManager>(HelloManager).toSelf()

export default DIContainer
