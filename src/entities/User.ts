import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Cv } from "./Cv"
import { Site } from "./Site"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 25, nullable: false})
    name: string

    @Column({length: 100, nullable: false})
    email: string

    @Column({length: 100, nullable: false})
    password: string

    @Column({default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Cv, (cv) => cv.ownerId)
    cvs: Cv[]

    @OneToMany(() => Site, (site) => site.ownerId)
    sites: Site[]
}