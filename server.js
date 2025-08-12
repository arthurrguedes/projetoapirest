// Criando um server
import app from './src/app.js'
const port = 3000

// Listening (escuta a porta)
// o arrow function é como se fosse um this, chama uma função com um retorno implicito
app.listen(port, () => {
    console.log(`Servidor rodando liso em http://localhost:${port}`)
})

