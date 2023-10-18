const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./db/user')

app.use(express.json())
app.use(cors())

const Todo = require('./db/todos')


app.post('/signUp', async (req, resp) => {
    const { email} = req.body
    const userExist = await User.findOne({ email });
    if (!userExist) {
        const data = await User(req.body)
        const result = await data.save()
        resp.send(result)
    }
    else {
        resp.status(409).json({ error: "User already exists" });
    }
})

app.post('/login', async (req, resp) => {
    const { email, password } = req.body
    if (email && password) {
        const data = await User.findOne({ email, password })
        if (data) {
            resp.send(data)
        }
        else {
            resp.send({ Result: "Email or Password is Wrong111" })
        }

    } else {
        resp.send({ Result: "Email or Password is Wrong222" })
    }
})


app.post('/todo', async (req, resp) => {
    const {userId, todo} = req.body;
    const data = new Todo({userId, todo: todo})
    // const data = new Todo(req.body)
    const result = await data.save()
    resp.send(result)
})

app.get('/listTodo/:userId', async (req, resp) => {
    const userId = req.params.userId 
    const data = await Todo.find({userId})
    resp.send(data)
})

app.delete('/delete/:id', async (req, resp) => {
    const data = await Todo.deleteOne({ _id: req.params.id })
    resp.send(data)
})

app.get('/getWork/:id', async (req, resp) => {
    const data = await Todo.findOne({ _id: req.params.id })
    resp.send(data)
})

app.put('/update/:id', async (req, resp) => {
    const data = await Todo.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(data)
})

app.listen(4120)