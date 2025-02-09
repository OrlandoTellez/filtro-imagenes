import express from "express"
import {dirname, join} from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

console.log(__dirname)

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())

// configuracion ejs
app.set("view engine", "ejs")
app.set("views", join(__dirname, "views"))

// Rutas
app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))