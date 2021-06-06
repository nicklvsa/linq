import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('queue_user_refs')
export class QueueUserRef extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        default: 'uuid_generate_v4()',
        type: 'uuid',
    })
    queue_user_ref_id!: string;

    @PrimaryColumn({
        type: 'uuid',
    })
    queue_id!: string;

    @PrimaryColumn({
        type: 'uuid',
    })
    user_id!: string;
}