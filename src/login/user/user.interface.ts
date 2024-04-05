import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id_user: Number;
    @Column()
    nombre: String;
    @Column()
    usuario: String;
    @Column()
    clave: String;
}
