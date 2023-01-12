import { UserDevicesEntity } from "src/users/entities/user-devices.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DeviceInfoEntity } from "./device-info.entity";

@Entity({ name: 'devices' })
export class DeviceEntity {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 30 })
    type: string;

    @Column({ length: 30 })
    madeBy: string;

    @Column()
    photoUrl: string;

    @OneToOne(
        type => DeviceInfoEntity,
        (info) => info.id,
        { cascade: true, eager: true })
    @JoinColumn({ name: 'deviceInfo_id' })
    info: DeviceInfoEntity;
}
