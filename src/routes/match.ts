import {Router} from "express"
import MatchControllers from "../controller/MatchControllers"


const router = Router ()

router.post ("/" , MatchControllers.createMatch)


export default router