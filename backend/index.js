

const express = require("express")

const servidor = express()

servidor.use(express.static("public"))

servidor.listen(3000,()=>{
    console.log("servidor en puerto 3000")
})