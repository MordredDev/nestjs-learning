import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('testing')
export class TestingOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;
}
