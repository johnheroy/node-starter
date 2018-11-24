import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import DIContainer from './di-container';

// Register controllers by importing them.
import './hello/HelloController';

const port = 3000

let server = new InversifyExpressServer(DIContainer);
let app = server.build()

app.listen(port, () => { console.log(`Listening on port ${port}!`) })
