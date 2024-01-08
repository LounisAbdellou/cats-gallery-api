import { Seeder } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Cat } from "src/cat/entities/cat.entity";

export default class CatSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    await dataSource.query('TRUNCATE "cat" RESTART IDENTITY;');

    const repository = dataSource.getRepository(Cat);

    await repository.insert([
      {
        name: "Robi",
        birthdate: "2015-03-29",
        breed: "Persian",
        location: "Paris refuge - 75",
        gender: "Male",
        picturePath: "http://placekitten.com/200/300",
      },
      {
        name: "Toto",
        birthdate: "2014-09-25",
        breed: "Russian blue",
        location: "Marseille refuge - 13",
        gender: "Male",
        picturePath: "http://placekitten.com/400/300",
      },
      {
        name: "Gus",
        birthdate: "2012-05-19",
        breed: "Persian",
        location: "Grenoble refuge - 38",
        gender: "Male",
        picturePath: "http://placekitten.com/500/300",
      },
      {
        name: "Lulu",
        birthdate: "2013-06-20",
        breed: "Norwegian",
        location: "Bordeaux refuge - 33",
        gender: "Female",
        picturePath: "http://placekitten.com/200/250",
      },
      {
        name: "Riri",
        birthdate: "2015-03-29",
        breed: "Persian",
        location: "Paris refuge - 75",
        gender: "Male",
        picturePath: "http://placekitten.com/400/300",
      },
      {
        name: "Fifi",
        birthdate: "2014-09-25",
        breed: "Russian blue",
        location: "Marseille refuge - 13",
        gender: "Male",
        picturePath: "http://placekitten.com/200/300",
      },
      {
        name: "Loulou",
        birthdate: "2012-05-19",
        breed: "Persian",
        location: "Grenoble refuge - 38",
        gender: "Male",
        picturePath: "http://placekitten.com/200/250",
      },
      {
        name: "Zaza",
        birthdate: "2013-06-20",
        breed: "Norwegian",
        location: "Bordeaux refuge - 33",
        gender: "Female",
        picturePath: "http://placekitten.com/500/300",
      },
    ]);
  }
}
