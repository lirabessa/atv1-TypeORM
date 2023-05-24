import {Router} from "express"
import TeamController from "../controller/TeamControllers"


const router = Router ()

router.post ("/" , TeamController.create)
router.get ("/" , TeamController.list)
router.get ("/:name" , TeamController.listByName)
router.put ("/:id", TeamController.update)
router.delete("/:id" , TeamController.delete)

export default router