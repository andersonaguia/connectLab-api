import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'device_info'})
export class InfoEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 15})
    ipAddress: string;

    @Column({length: 50})
    macAddress: string;

    @Column({length: 10})
    signal: string;

}