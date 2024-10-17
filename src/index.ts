import { Hono } from 'hono'
import { api_song } from './views/song'
import { api_assistant } from './views/assistant'
import { bearerAuth } from 'hono/bearer-auth';

type Env = {
  TOKEN_API: string
}

// Declaramos la instancia principal y le pasamos las variables de entorno
// que declaramos anteriormente en el archivo wrangler.toml
const app = new Hono<{Bindings: Env}>()

app.use('/api/*', (c, next) => {
    const tokenMiddleware = bearerAuth({ token: c.env.TOKEN_API })
    return tokenMiddleware(c, next)
})

app.route('/api/', api_song)
app.route('/api/', api_assistant)

export default app