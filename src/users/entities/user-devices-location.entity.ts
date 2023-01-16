import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_devices_location' })
export class UserDeviceLocationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
        unique: true
    })
    deviceLocation: string;
}