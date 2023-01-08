import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'adresses'})
export class AddressEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 10, nullable: false})
    zipCode: string;

    @Column({length: 100, nullable: false})
    street: string;

    @Column({nullable: false})
    number: number;

    @Column({length: 100, nullable: false})
    neighborhood: string;

    @Column({length: 100, nullable: false})
    city: string;

    @Column({length: 100, nullable: false})
    state: string;

    @Column({length: 100, nullable: true})
    complement: string;

    @OneToOne(() => UserEntity,
    (user) => user.id)
    user: UserEntity;
}