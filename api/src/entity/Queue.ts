import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('queues')
export class Queue extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        default: 'uuid_generate_v4()',
        type: 'text',
    })
    queue_id!: string;

    @PrimaryColumn({
        type: 'text',
    })
    owner_user_id!: string;

    @Column()
    name!: string;
}