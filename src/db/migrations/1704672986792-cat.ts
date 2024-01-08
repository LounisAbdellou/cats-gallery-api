import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cat1704672986792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cat",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "birthdate",
            type: "varchar",
          },
          {
            name: "breed",
            type: "varchar",
          },
          {
            name: "location",
            type: "varchar",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "picturePath",
            type: "varchar",
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cat");
  }
}
