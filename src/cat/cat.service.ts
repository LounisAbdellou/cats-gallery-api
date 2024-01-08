import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }
}
