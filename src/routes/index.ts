import {Router} from "express"
import team from "./team"
import match from "./match"

const routes = Router();

routes.use("/team", team)
routes.use("/match", match)


export default routes