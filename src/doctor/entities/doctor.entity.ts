import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Prescription } from 'src/prescription/entities/prescription.entity';
import { Department } from 'src/department/entities/department.entity';
@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  history: [string];

  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;
}
