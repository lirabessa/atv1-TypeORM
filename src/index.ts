import express from "express"
import * as dotenv from  "dotenv"
import routes from "./routes"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())

app.use(express.json())
app.use(routes)
app.listen (PORT, () => console.log(`Rodando na porta ${PORT}`));
console.log("prima");

