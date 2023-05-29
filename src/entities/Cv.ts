import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import { User } from "./User"

@Entity("cvs")
export class Cv {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 25, nullable: false})
    title: string

    @Column({default: true})
    isActive: boolean

    @ManyToOne(() => User, (user) => user.id, {onDelete: "CASCADE"})
    ownerId: User
}