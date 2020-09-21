import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';
import Student from '../app/models/Student';

const models = [Student];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    console.log('O banco iniciou')
    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
