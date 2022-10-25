import express from 'express'
import  cors from 'cors'

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (request, response)=>{
    response.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})