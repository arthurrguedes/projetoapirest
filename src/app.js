import express from 'express'
import conexao from './conexao.js'
const app = express()

app.use(express.json())

// Criando uma rota default (endpoint)
app.get('/', (req, res) => {
    res.send('Hello')
})

// Criando um endpoint que lista os cursos
app.get('/cursos', (req, res) => {
  const sql = 'SELECT * FROM cursos'
  conexao.query(sql, (erro, resultados) => {
    if (erro) {
      res.status(500).json({ erro: erro })
    } else {
      res.status(200).json(resultados)
    }
  })
})

// Função buscando um item por id
app.get('/cursos/:id', (req, res) => {
  const { id } = req.params
  const sql = 'SELECT * FROM cursos WHERE id = ?'
  conexao.query(sql, [id], (erro, resultados) => {
    if (erro) {
      res.status(500).json({ erro: erro })
    } else if (resultados.length === 0) {
      res.status(404).json({ mensagem: 'Curso não encontrado' })
    } else {
      res.status(200).json(resultados[0])
    }
  })
})

// Inserir novo curso
app.post('/cursos', (req, res) => {
  const { disciplina } = req.body
  const sql = 'INSERT INTO cursos (disciplina) VALUES (?)'
  conexao.query(sql, [disciplina], (erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: erro })
    } else {
      res.status(201).json({ id: resultado.insertId, disciplina })
    }
  })
})

// Excluir o curso pelo id
app.delete('/cursos/:id', (req, res) => {
  const { id } = req.params
  const sql = 'DELETE FROM cursos WHERE id = ?'
  conexao.query(sql, [id], (erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: erro })
    } else if (resultado.affectedRows === 0) {
      res.status(404).json({ mensagem: 'Curso não encontrado' })
    } else {
      res.status(200).json({ mensagem: `Curso ${id} excluído com sucesso!` })
    }
  })
})

// Alterar a disciplina por um ID
app.put('/cursos/:id', (req, res) => {
  const { id } = req.params
  const { disciplina } = req.body
  const sql = 'UPDATE cursos SET disciplina = ? WHERE id = ?'
  conexao.query(sql, [disciplina, id], (erro, resultado) => {
    if (err) {
      res.status(500).json({ erro: erro })
    } else if (resultado.affectedRows === 0) {
      res.status(404).json({ mensagem: 'Curso não encontrado' })
    } else {
      res.status(200).json({ id, disciplina })
    }
  })
})

export default app
