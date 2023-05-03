import { Router } from "express"
import TeamController from "../controller/TeamControllers"


const router = Router ()

router.post ("/" , TeamController.create)
router.get ("/" , TeamController.list)
router.get ("/:name" , TeamController.listByName)
router.delete("/" , TeamController.delete)

export default router