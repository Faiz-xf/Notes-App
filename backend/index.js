const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const NotesRoutes = require('./routes/api/Note')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(console.log('MongoDB Connected...'))
.catch((err)=>console.log(err))

app.use('/api/notes',NotesRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening at https://localhost:${process.env.PORT}`)
})
