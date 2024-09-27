import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class Core {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @CreateDateColumn({ name: 'create_at' })
    createAt: Date;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: Date;
}