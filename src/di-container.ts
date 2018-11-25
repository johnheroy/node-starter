import { Container } from 'inversify'

var DIContainer = new Container()
// DIContainer.bind<HelloRepository>(HelloRepository).toSelf().inSingletonScope()

export default DIContainer
