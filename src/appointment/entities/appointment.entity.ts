import { Cat } from "src/cat/entities/cat.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "dateTime" })
  dateTime: string;

  @ManyToOne(() => Cat, (cat) => cat.appointments)
  cat: Cat;
}
