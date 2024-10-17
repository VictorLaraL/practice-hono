import { Hono } from 'hono'


const app = new Hono()

app.get('/', (c) => {
  return c.json({
    "Hello": "World"
  })
})

export default app
