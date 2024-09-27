import { Entity, Column } from "typeorm";
import { Core } from "./Core";

@Entity()
export class User extends Core {
    @Column({ type: 'text' })
    username: string;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'text' })
    password: string;
}