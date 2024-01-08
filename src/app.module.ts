import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatModule } from "./cat/cat.module";
import { DbModule } from "./db/db.module";

@Module({
  imports: [DbModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
