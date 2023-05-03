import {Router} from "express"
import team from "./team"

const routes = Router();

routes.use("/team", team)


export default routes