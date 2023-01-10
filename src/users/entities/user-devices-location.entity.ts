import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDevicesEntity } from "./user-devices.entity";

@Entity({ name: 'user_devices_location' })
export class UserDeviceLocationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    deviceLocation: string;

    @OneToOne(() => UserDevicesEntity,
        (userDevice) => userDevice.id)
    userDeviceId: UserDevicesEntity;

}