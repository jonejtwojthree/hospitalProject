import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Doctor, (doctor) => doctor.department)
  doctor: Doctor;
}
