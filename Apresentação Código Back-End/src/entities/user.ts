import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { v4 as uuid} from "uuid";
import { IProfileRequest } from "../interface/IProfileRequest";
import { Profile } from "./profile";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id!: string ;
    @Column()
    name!: string;
    @Column()
    email!: string;
    @Column()
    admin!: boolean;
    @Column()
    password!: string;
    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;


    @ManyToOne(() => Profile)
    @JoinColumn({ name: "profile" }) profile!: IProfileRequest
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { User };