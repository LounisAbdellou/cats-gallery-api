import { Column, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ name: "picture_path" })
  picturePath: string;
}
