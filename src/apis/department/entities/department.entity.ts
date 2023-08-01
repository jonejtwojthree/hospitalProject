import { Doctor } from 'src/apis/doctor/entities/doctor.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  // @OneToMany(() => Doctor, (doctor) => doctor.department)
  // @Field(() => Doctor)
  // doctor: Doctor;
}
