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

app.delete('/delete/:id', async(req, resp) => {
    const data = await Todo.deleteOne({_id:req.params.id})
    resp.send(data)
})

app.get('/getWork/:id', async (req, resp) => {
    const data = await Todo.findOne({_id:req.params.id})
    resp.send(data)
})

app.put('/update/:id', async(req, resp) => {
    const data = await Todo.updateOne(
        {_id:req.params.id},
        {
            $set: req.body
        }
    )
    resp.send(data)
})

app.listen(4120)