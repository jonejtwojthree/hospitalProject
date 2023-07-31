import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  naame: string;

  @Column()
  jumin: string;

  @Column()
  age: number;

  @Column()
  address: string;
}
