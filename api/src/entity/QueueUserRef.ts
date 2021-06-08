import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('queue_user_refs')
export class QueueUserRef extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        default: 'uuid_generate_v4()',
        type: 'text',
    })
    queue_user_ref_id!: string;

    @PrimaryColumn({
        type: 'text',
    })
    queue_id!: string;

    @PrimaryColumn({
        type: 'text',
    })
    user_id!: string;
}