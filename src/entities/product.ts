import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./category";

@Entity("Product")
export class Product {

    @PrimaryColumn()
    readonly id!: string ;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    price!: string;

    @ManyToOne(() => Category)
    @JoinColumn() category!: Category

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}