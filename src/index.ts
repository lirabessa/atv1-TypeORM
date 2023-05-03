import * as express from "express"
import * as dotenv from  "dotenv"
import routes from "./routes"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.listen (PORT, () => console.log(`Rodandoo na porta ${PORT}`));

app.use(routes)
