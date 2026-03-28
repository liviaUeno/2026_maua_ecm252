const express = require('express')
const mysql2 = require('mysql2/promise')

const app = express() // permite definir endpoints 
//middleware: intercepta e permite lidar com json
app.use(express.json())

let conexao

const conectar = async () => {
    try{
        conexao = await mysql2.createConnection({
            host: "maua-ecm252-livs-u.e.aivencloud.com",
            user: "avnadmin",
            password: "AVNS_na4egFPFSFI0-N0RHNd",
            database: "defaultdb",
            port: "28278"
        })
        console.log("Conectado ao MySQL")
    } catch (error) {
        console.log(`Erro ao conectar com o banco: ${error}`)
    }
}
conectar()

//endpoints
app.delete('/tarefas', async (req, res) => {
    try{
        const {cod_tarefa} = req.body
        const resultado = await conexao.query("DELETE FROM tb_tarefa WHERE cod_tarefa = ?;", [cod_tarefa])
        console.log(`Tarefa deletada com sucesso: ${resultado}`)    
        res.status(200).json({
            cod_tarefa: cod_tarefa,
            mensagem: 'Tarefa deletada com sucesso'
        })
    } catch (error){
        console.log(`Erro ao deletar tarefa: ${error}`)
        res.status(500).json({
            erro: 'Erro ao deletar tarefa'
        })
    }
})

app.put('/tarefas', async (req, res) => {
    try{
        const {cod_tarefa, titulo, descricao} = req.body
        const resultado = await conexao.query("UPDATE tb_tarefa SET titulo = ?, descricao = ? WHERE cod_tarefa = ?;", [titulo, descricao, cod_tarefa])
        console.log(`Tarefa atualizada com sucesso: ${resultado}`)
        res.status(200).json({
            cod_tarefa: cod_tarefa,
            titulo: titulo,
            descricao: descricao,
            mensagem: 'Tarefa atualizada com sucesso'
        })
    } catch (error){
        console.log(`Erro ao atualizar tarefa: ${error}`)
        res.status(500).json({
            erro: 'Erro ao atualizar tarefa'
        })
    }
})

app.post('/tarefas', async (req, res) => {
    try{
        const {titulo, descricao} = req.body
        // const titulo = req.body.titulo
        // const descricao = req.body.desscricao
        const [resultado] = await conexao.query("INSERT INTO tb_tarefa(titulo, descricao) VALUES (?, ?);", [titulo, descricao])
        console.log(`Tarefa adicionada com sucesso: ${resultado.insertId}`)
        res.status(201).json({
            titulo: titulo,
            descricao: descricao,
            cod_tarefa: resultado.insertId
        })
    } catch (error){
        console.log(`Erro ao adicionar tarefas: ${error}`)
        res.status(500).json({
            erro: 'Erro ao adicionar tarefa'
        })
    }
})

// obter lista de tarefas (select)
app.get('/tarefas', async (req, res) => {
    try{
        const [linhas] = await conexao.query('SELECT * FROM tb_tarefa')
        console.log(linhas)
        res.json(linhas)
    } catch (error){
        console.log(`Erro ao obter tarefas: ${error}`)
        res.status(500).json({
            erro: 'Erro ao obter tarefas'
        })
    }
})

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Servidor funcionando!'
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})