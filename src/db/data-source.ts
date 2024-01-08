import { DataSource } from "typeorm";
import { dataSourceOptions } from "./data-source.config";

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
