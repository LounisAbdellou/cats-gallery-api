import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: ["dist/db/migrations/*{.ts,.js}"],
  seeds: ["dist/db/seeds/**/*{.ts,.js}"],
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrationsTableName: "typeorm_migrations",
  migrationsRun: false,
  synchronize: true,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
