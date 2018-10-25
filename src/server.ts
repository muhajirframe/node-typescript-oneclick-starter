import express from 'express'
import { logger } from './logger'

const app = express()

const port = 3000

app.get('/', (_, res) => {
  logger.info('Got a request')
  res.send('Hello world')
})

app.listen(port, () => {
  logger.info(`listening on port ${port}`)
})
