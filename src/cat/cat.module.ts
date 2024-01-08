import { Module } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CatController } from "./cat.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "./entities/cat.entity";
import { Appointment } from "src/appointment/entities/appointment.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cat, Appointment])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
