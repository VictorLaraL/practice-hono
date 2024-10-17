import { Hono } from 'hono'
import { api_song } from './views/song'
import { api_assistant } from './views/assistant'

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

app.route('/', api_song)
app.route('/', api_assistant)

export default app