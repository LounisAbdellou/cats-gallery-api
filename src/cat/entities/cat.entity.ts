import { Appointment } from "src/appointment/entities/appointment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "birthdate" })
  birthdate: string;

  @Column({ name: "breed" })
  breed: string;

  @Column({ name: "location" })
  location: string;

  @Column({ name: "gender" })
  gender: string;

  @Column({ name: "picturePath" })
  picturePath: string;

  @OneToMany(() => Appointment, (appointment) => appointment.cat)
  appointments: Appointment[];
}
