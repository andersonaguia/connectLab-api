import { DeviceEntity } from "src/devices/entities/device.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDeviceEntity } from "./user-devices.entity";

@Entity({ name: 'user_devices_location' })
export class UserDeviceLocationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    deviceLocation: string;

    @OneToOne(() => UserDeviceEntity,
        (userDevice) => userDevice.id)
    userDeviceId: UserDeviceEntity;

}