import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  let name = req.query.name || 'World'
  res.send(`Hello ${name}!`)
})

app.listen(port, () => { console.log(`Listening on port ${port}!`) })
