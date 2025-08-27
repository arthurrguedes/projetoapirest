import conexao from '../database/conexao.js'
/*
* Regra de negócio
*/
class CursoController {
    // index(): listar tudo
    index(req, res){
        const sql = "SELECT * FROM cursos;"
    conexao.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            res.status(404);json({'error': error})
        } else {
            res.status(200).json(result)
            }
        })
    }

    // show(): listar por id
    show(){

    }
    // store(): criar dados
    store(){

    }
    // update(): atualizar dados
    update(){

    }
    // delete(): remover dados
    delete(){
        
    }
}

export default new CursoController()