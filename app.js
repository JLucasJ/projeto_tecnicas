import express from "express";
// uma constante receberá uma instância do Express
const app = express();
// array de eletrônicos
const notebooks = [
    {"id":1, "marca":"Asus"},
    {"id":2, "marca":"HP"}
]
//Criando rotas
//rota vazia. 200 stauts ok
app.get('/', (req, res) =>{
    res.status(200).send('API Loja');
})
app.get('/note', (res, res) => {
    res.status(200).json(notebooks)
})

app.post('/note', (req, res) => {
    notebooks.push(req.body);
    res.status(201).send('Produto foi cadastrado com sucesso')
})

export default app;