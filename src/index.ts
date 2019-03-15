import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Server } from './Server';

createConnection().then((connection) => {
  console.log(`connected to db ${connection.name}`)
  new Server().start()
})
