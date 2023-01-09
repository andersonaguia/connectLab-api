import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import * as bcrypt from 'bcrypt';
import { UserRole } from "../enum/user.role";
import { UserDeviceEntity } from "./user-devices.entity";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    fullName: string;

    @Column({ nullable: true })
    photoUrl?: string;

    @Column({ length: 30, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    phone?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(
        type => AddressEntity,
        (address) => address.id,
        { cascade: true, eager: true })
    @JoinColumn({ name: 'address_id' })
    address: AddressEntity;

    @OneToOne(
        type => UserDeviceEntity,
        (userDevices) => userDevices.id,
        { cascade: true, eager: true })
    @JoinColumn({ name: 'userDevices_id' })
    userDevices: UserDeviceEntity;

    @Column({ nullable: false })
    salt: string;

    @Column()
    active: boolean;

    @Column({type: "enum",
    enum: UserRole,
    default: UserRole.CLIENT})
    role: UserRole;

    /*
    @Column({ type: 'varchar', length: 64 })
    confirmationToken: string;

    @Column({ type: 'varchar', length: 64 })
    recoverToken: string;
    */

    async checkPassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password;
    }
}
