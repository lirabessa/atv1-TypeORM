import {Router} from "express"
import MatchControllers from "../controller/MatchControllers"


const router = Router ()

router.post ("/create" , MatchControllers.createMatch)
router.get ("/buscar" , MatchControllers.list)
router.get("/buscar/:id", MatchControllers.listById)
router.put("/atualizar", MatchControllers.update)
router.delete("/deletar/:id" , MatchControllers.delete)


export default router