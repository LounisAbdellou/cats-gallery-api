import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./entities/cat.entity";
import { Repository } from "typeorm";

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}

  findAll() {
    return this.catRepository.insert([
      {
        name: "Robi",
        birthdate: "2015-03-29",
        breed: "Persian",
        location: "Paris refuge - 75",
        gender: "Male",
        picturePath: "http://placekitten.com/200/300",
      },
      {
        name: "Toto",
        birthdate: "2014-09-25",
        breed: "Russian blue",
        location: "Marseille refuge - 13",
        gender: "Male",
        picturePath: "http://placekitten.com/400/300",
      },
      {
        name: "Gus",
        birthdate: "2012-05-19",
        breed: "Persian",
        location: "Grenoble refuge - 38",
        gender: "Male",
        picturePath: "http://placekitten.com/500/300",
      },
      {
        name: "Lulu",
        birthdate: "2013-06-20",
        breed: "Norwegian",
        location: "Bordeaux refuge - 33",
        gender: "Female",
        picturePath: "http://placekitten.com/200/250",
      },
      {
        name: "Riri",
        birthdate: "2015-03-29",
        breed: "Persian",
        location: "Paris refuge - 75",
        gender: "Male",
        picturePath: "http://placekitten.com/400/300",
      },
      {
        name: "Fifi",
        birthdate: "2014-09-25",
        breed: "Russian blue",
        location: "Marseille refuge - 13",
        gender: "Male",
        picturePath: "http://placekitten.com/200/300",
      },
      {
        name: "Loulou",
        birthdate: "2012-05-19",
        breed: "Persian",
        location: "Grenoble refuge - 38",
        gender: "Male",
        picturePath: "http://placekitten.com/200/250",
      },
      {
        name: "Zaza",
        birthdate: "2013-06-20",
        breed: "Norwegian",
        location: "Bordeaux refuge - 33",
        gender: "Female",
        picturePath: "http://placekitten.com/500/300",
      },
    ]);
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }
}
