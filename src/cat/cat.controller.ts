import { Controller, Get, Param } from "@nestjs/common";
import { CatService } from "./cat.service";

@Controller(["cat", "cats"])
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.catService.findOne(+id);
  }
}
