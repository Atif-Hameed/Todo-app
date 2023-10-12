const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const Todo = require('./db/todos')

app.post('/todo', async (req, resp) => {
    const data = new Todo(req.body)
    const result = await data.save()
    resp.send(result)
})

app.get('/listTodo', async (req, resp) => {
    const data = await Todo.find()
    resp.send(data)
})

app.listen(4120)