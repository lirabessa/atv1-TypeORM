import {Router} from "express"
import MatchControllers from "../controller/MatchControllers"


const router = Router ()

router.post ("/" , MatchControllers.createMatch)
router.get ("/" , MatchControllers.list)
router.get("/:id", MatchControllers.listById)
router.put("/", MatchControllers.update)
router.delete("/:id" , MatchControllers.delete)


export default router