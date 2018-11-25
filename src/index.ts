import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import DIContainer from './di-container'
import { createConnection, Connection } from 'typeorm'
import { from } from 'rxjs'

// Register controllers by importing them.
import './hello/HelloController';

const port = 3000

from(createConnection())
  .subscribe((connection) => {
    console.log(`connected to db ${connection.name}`)

    let server = new InversifyExpressServer(DIContainer);
    let app = server.build()

    app.listen(port, () => { console.log(`Listening on port ${port}!`) })
  })
