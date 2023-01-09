import { DeviceEntity } from "src/devices/entities/device.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'user_devices' })
export class UserDeviceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isOn: boolean;

    @OneToOne(() => UserEntity,
        (user) => user.id)
    userId: UserEntity;

    @OneToOne(() => DeviceEntity,
        (device) => device.id)
    deviceId: DeviceEntity;

    @OneToOne(
        type => DeviceLocationEntity,
        (deviceLocation) => deviceLocation.id,
        { cascade: true, eager: true })
    @JoinColumn({ name: 'deviceLocation_id' })
    deviceLocation: DeviceLocationEntity;
}