import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Team"})
export class Team{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: false, unique:true, length:30})
    name: string
}