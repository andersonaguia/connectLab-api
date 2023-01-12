import { deviceLocals } from "src/devices/enum/locals.enum";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDevicesEntity } from "./user-devices.entity";

@Entity({ name: 'user_devices_location' })
export class UserDeviceLocationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "enum",
    enum: deviceLocals,
    default: deviceLocals.CASA})
    deviceLocation: deviceLocals;
}