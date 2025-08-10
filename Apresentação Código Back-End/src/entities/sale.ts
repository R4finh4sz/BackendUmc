import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, } from "typeorm";
import { v4 as uuid } from "uuid";
import { client } from "./client";
import { Product } from "./product";
import { User } from "./user";


@Entity("Sale")
class Sale {

    @PrimaryColumn()
    readonly id!: string ;

    @ManyToOne(() => client)
    @JoinColumn() client!: client

    @ManyToOne(() => Product)
    @JoinColumn() product!: Product

    @ManyToOne(() => User)
    @JoinColumn() user!: User

    @Column()
    quantity!: string;

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

export { Sale };