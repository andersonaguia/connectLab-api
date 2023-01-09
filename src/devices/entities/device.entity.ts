import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { InfoEntity } from "./info.entity";

@Entity({name:'devices'})
export class DeviceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    name: string;

    @Column({length: 30})
    type: string;

    @Column({length: 30})
    madeBy: string;

    @Column()
    photoUrl: string;

    @OneToOne(
        type => InfoEntity,
        (info) => info.id,
        { cascade: true, eager: true })
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;
}
