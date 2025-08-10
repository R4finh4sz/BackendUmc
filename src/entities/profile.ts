import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("profile")
export class Profile {
    @PrimaryColumn()
    readonly id!: string ;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    update_at!: Date;


    constructor() {
        if (!this.id) {
            this.id= uuid();
        }
    }
}