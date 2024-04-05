import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDto {
    @PrimaryGeneratedColumn() 
    readonly id_user: Number;
    @Column()
    readonly nombre: String;
    @Column()
    readonly usuario: String;
    @Column()
    readonly clave: String;
}