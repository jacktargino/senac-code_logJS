import express from "express";

const app = express();
const port =  3000;

app.use(express.json())

const users = []

app.get('/', (req, res) => {
    res.send("Mensagem enviada!!")

})

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Entrei no POST')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

// Requests
// QueryParams
// RouteParams www.sotedpgistavp.com/usuarios/10/edit
// BodyParams 