import { DeviceEntity } from "src/devices/entities/device.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserDeviceLocationEntity } from "./user-devices-location.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'user_devices' })
export class UserDevicesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isOn: boolean;

    @Column({ length: 50 })
    information: string;

    @Column({ length: 50 })
    room: string;

    @ManyToOne(
        () => UserDeviceLocationEntity,
        (userDeviceLocation) => userDeviceLocation.id,
        { eager: true })
    @JoinColumn({ name: 'deviceLocation_id' }
    )
    location: UserDeviceLocationEntity;

    @ManyToOne(
        () => DeviceEntity,
        (device) => device._id,
        { eager: true, onDelete: 'SET NULL' }
    )
    @JoinColumn({ name: 'device_id' })
    device: DeviceEntity;

    @ManyToOne(
        () => UserEntity,
        (user) => user.id,
        { eager: true, onDelete: 'SET NULL' }
    )
    @JoinColumn({ name: 'user_id' })
    userId: UserEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}