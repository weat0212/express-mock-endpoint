const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/json', (req, res) => {
    res.json({status:"200",message:"OK",data:null,time:"2022-11-29T16:53:38.649015",success:true})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})