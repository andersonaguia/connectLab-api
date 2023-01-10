import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import * as bcrypt from 'bcrypt';
import { UserRole } from "../enum/user.role";

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

    @Column({ nullable: false })
    salt: string;

    @Column()
    active: boolean;

    @Column({type: "enum",
    enum: UserRole,
    default: UserRole.CLIENT})
    role: UserRole;

    async checkPassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password;
    }
}
