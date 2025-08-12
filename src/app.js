import express from 'express'
const app = express()

const cursos = [
    {id: 1, curso: 'ADS'},
    {id: 2, curso: 'Governança'},
    {id: 3, curso: 'Infraestrutura'},
    {id: 4, curso: 'Inteligência Artificial'},
]

// Criando uma rota default (endpoint)
app.get('/', (req, res) => {
    res.send('Hello')
})

// Criando um endpoint que lista os cursos
app.get('/cursos', (req, res) => {
    res.send(cursos)
})

export default app
