import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cats1704661740593 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cats",
        columns: [
          {
            name: "id",
            type: "increment",
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
    await queryRunner.dropTable("cats");
  }
}
