import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DeviceEntity } from "./device.entity";

@Entity({ name: 'device_info' })
export class DeviceInfoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    virtual_id: string;

    @Column({ length: 15 })
    ip_address: string;

    @Column({ length: 50 })
    mac_address: string;

    @Column({ length: 10 })
    signal: string;

    @OneToOne(() => DeviceEntity,
        (device) => device._id)
    deviceId: DeviceEntity;
}