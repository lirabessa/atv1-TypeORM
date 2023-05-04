import {Request, Response} from "express"
import { Match } from "../entities/Match";
import { Team } from "../entities/Team";
import AppDataSource from "../data-source";
import { ILike } from "typeorm";
import team from "./TeamControllers";

class MatchController{

    public async createMatch(req:Request, res: Response){
        const{idhost, idvisitor, date} = req.body
        const host = await AppDataSource.getRepository(Team).findOneBy({id: idhost})
        const visitor = await AppDataSource.getRepository(Team).findOneBy({id:idvisitor})
        const match = new Match();
        match.host = host
        match.visitor = visitor
        if(date){
            match.date = date
        }else{
        match.date = new Date()
        }
        await AppDataSource.getRepository(Match).save(match)
        return res.json(match)
    }

    public async list (req:Request, res:Response){
        const {limit, offset} = req.body
        const match = await AppDataSource.getRepository(Match).find({
            relations:{
                host:true,
                visitor:true
            },
            order:{
                date:"DESC"
            },
            skip:offset,
            take:limit
        });
        return res.json(match)
    }

    public async listById (req:Request, res:Response){
        const {id} = req.params
        console.log(id);
        
        const match = await AppDataSource.getRepository(Match).find({
            where:[
                {
                    host:{
                        id: id
                    }
                },
                {
                    visitor:{
                        id: id
                    }
                }
            ],
            relations:{
                host:true,
                visitor:true
            }
        })
        return res.json(match)
    }
 
    public async update (req: Request, res: Response){
        const {idvisitor, idhost, date, id} = req.body
        const host = await AppDataSource.getRepository(Team).findOne({where:{id:idhost}})
        const visitor = await AppDataSource.getRepository(Team).findOne ({where:{id:idvisitor}})
        const match = await AppDataSource.getRepository(Match).findOneBy(id)
        match.date = date
        match.host = host
        match.visitor = visitor
        await AppDataSource.getRepository(Match).save(match)
        return res.json(match)
    }

    public async delete (req: Request, res:Response){
        const {id} = req.body
        const match = await AppDataSource.getRepository(Match).findOneBy(id)
        await AppDataSource.getRepository(Match).delete(match)
        return res.json({team, message: "Partida deletada"})
    }

}



const match = new MatchController();

export default match;