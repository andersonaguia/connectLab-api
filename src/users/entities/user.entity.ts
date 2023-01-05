import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "./address.entity";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string;

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
        { cascade: true })
    @JoinColumn({ name: 'address_id' })
    address: AddressEntity;
}
