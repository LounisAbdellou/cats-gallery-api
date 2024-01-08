import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./entities/cat.entity";
import { Repository } from "typeorm";

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
  ) {}

  findAll() {
    return this.catRepository.find();
  }

  findOne(id: number) {
    return this.catRepository.findOne({
      where: { id },
      relations: {
        appointments: true,
      },
    });
  }
}
