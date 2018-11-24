import express from 'express'
import 'reflect-metadata'
import DIContainer from './di-container'
import { HelloRouter } from './hello/HelloRouter';

const app = express()
const port = 3000

const helloRouter = DIContainer.resolve<HelloRouter>(HelloRouter)
app.get('/', helloRouter.home)

app.listen(port, () => { console.log(`Listening on port ${port}!`) })
