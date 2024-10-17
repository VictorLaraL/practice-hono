import { Hono } from 'hono'

type Env = {
  MY_VAR: string
}

// Declaramos la instancia principal y le pasamos las variables de entorno
// que declaramos anteriormente en el archivo wrangler.toml
const app = new Hono<{Bindings: Env}>()

app.get('/', (c) => {
  return c.json({
    "Hello": "World",
    "VAR": c.env.MY_VAR
  })
})

export default app
