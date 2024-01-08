import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatModule } from "./cat/cat.module";
import { DbModule } from "./db/db.module";
import { AppointmentModule } from "./appointment/appointment.module";

@Module({
  imports: [DbModule, CatModule, AppointmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
