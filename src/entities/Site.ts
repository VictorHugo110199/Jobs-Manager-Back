import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity("sites")
export class Site {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 25, nullable: false})
    name: string

    @Column()
    url: string

    @Column({default: true})
    isComplet: boolean

    @ManyToOne(() => User, (user) => user.id, {onDelete: "CASCADE"})
    ownerId: User
}