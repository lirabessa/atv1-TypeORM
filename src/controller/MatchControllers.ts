import {Request, Response} from "express"
import { Match } from "../entities/Match";
import { Team } from "../entities/Team";
import AppDataSource from "../data-source";
import { ILike } from "typeorm";

class MatchController{

    public async createMatch(req:Request, res: Response){
        const{idhost, idvisitor} = req.body
        const host = await AppDataSource.getRepository(Team).findOneBy({id: idhost})
        const visitor = await AppDataSource.getRepository(Team).findOneBy({id:idvisitor})
        const match = new Match();
        match.host = host
        match.visitor = visitor
        match.date = new Date()
        await AppDataSource.getRepository(Match).save(match)
        return res.json(match)
    }
}

const match = new MatchController();

export default match;