import express from 'express'
const app = express()

app.use(express.json())

const cursos = [
    {id: 1, disciplina: 'ADS'},
    {id: 2, disciplina: 'Governança'},
    {id: 3, disciplina: 'Infraestrutura'},
    {id: 4, disciplina: 'Inteligência Artificial'},
]

// Criando uma rota default (endpoint)
app.get('/', (req, res) => {
    res.send('Hello')
})

// Criando um endpoint que lista os cursos
  app.get('/cursos', (req, res) => {
      res.status(200).send(cursos)
 })

 // Lista cursos
app.post('/cursos', (req, res) => {
    cursos.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})


// Função buscando um item por id
function buscarCursosPorId(id) {
    return cursos.filter(curso => curso.id == id)
}

function buscarIndexCurso(id) {
    return cursos.findIndex( curso => curso.id == id)
}

// Criando variavel que busca a informação do browser do usuário
app.get('/cursos/:id', (req, res)=> {
    //let index = req.params.id
    //console.log(index)
    res.json(buscarCursosPorId(req.params.id))
})

// Excluir o curso pelo id
app.delete('/cursos/:id', (req, res)=> {
   let index = buscarIndexCurso(req.params.id)
   cursos.splice(index, 1)
   console.log(index)
   res.send(`O curso com id ${req.params.id} excluído com sucesso!`)
})

// Alterar a disciplina de um ID
app.put('/cursos/:id', (req, res)=> {
   let index = buscarIndexCurso(req.params.id)
   cursos[index].disciplina = req.body.disciplina
   //res.status(200).send('Alteração cadastrada com sucesso!')
   res.json(cursos)
})

export default app
