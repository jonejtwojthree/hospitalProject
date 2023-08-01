import { Doctor } from 'src/doctor/entities/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  introduction: string;

  @Column()
  number: string;

  @OneToOne(() => Doctor)
  @JoinColumn()
  profile: Doctor;
}
