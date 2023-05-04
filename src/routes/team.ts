import {Router} from "express"
import TeamController from "../controller/TeamControllers"


const router = Router ()

router.post ("/create" , TeamController.create)
router.get ("/buscar" , TeamController.list)
router.get ("/buscar/:name" , TeamController.listByName)
router.put ("/atualizar:id", TeamController.update)
router.delete("/deletar/:id" , TeamController.delete)

export default router