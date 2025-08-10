import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("supplier")
export class Supplier {

    @PrimaryColumn()
    readonly id!: string ;

    @Column()
    name!: string;

    @Column()
    representative!: string;

    @Column()
    email!: string;

    @Column()
    address!: string;

    @Column()
    telephone!: string;

    @Column()
    website!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

};