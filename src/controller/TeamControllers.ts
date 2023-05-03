import{ Request, Response} from "express"
import { Team } from "../entities/Team";
import AppDataSource from "../data-source";
import { ILike } from "typeorm";

class TeamController{ 

    public async create(req:Request, res: Response):Promise<Response>{
        
        const {name} = req.body
        if(!name || name.trim() == ""){
            return res.json({error:"Nome necessário"})
        }

        const team = new Team()
        team.name = name

        const response:any = await AppDataSource.manager.save(Team, team).catch((e) => {
            return res.json({erro:e.message});
            })
        return res.json(response)
    }

    public async list(req:Request, res: Response):Promise<Response>{
        const teams = await AppDataSource.getRepository(Team).find({
            order: {
                name: "asc"
            }
        })
        return res.json(teams)
    }

    public async listByName(req:Request, res: Response):Promise<Response>{
        const {name} = req.params
        const teams = await AppDataSource.getRepository(Team).find({
            where:{
                name: ILike(`%${name}%`)
            },
            
            order: {
                name: "asc"
            }
        })
        return res.json(teams)
    }

    public async delete (req:Request, res: Response):Promise<Response>{
        const id = req.params.id
        const team = await AppDataSource.getRepository(Team).findOneBy(id)
        return res.json(team)
    }
}
const team = new TeamController();
export default team;