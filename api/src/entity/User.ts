import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        default: 'uuid_generate_v4()',
        type: 'uuid',
    })
    user_id!: string;
    
    @Column()
    email!: string;

    @Column()
    password!: string;
}