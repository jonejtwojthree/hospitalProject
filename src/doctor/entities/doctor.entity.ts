import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Department } from 'src/department/entities/department.entity';
@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  history: [string];

  @ManyToOne(() => Department, (department) => department.doctor)
  department: Department;
}
