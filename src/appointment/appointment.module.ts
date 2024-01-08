import { Module } from "@nestjs/common";
import { AppointmentService } from "./appointment.service";
import { AppointmentController } from "./appointment.controller";
import { Cat } from "src/cat/entities/cat.entity";
import { Appointment } from "./entities/appointment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Cat])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
