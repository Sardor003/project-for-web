
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../../entities/user.entity';

export default class UserSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const userFactory = factoryManager.get(User);

    await userFactory.save({  username: 'user', password: '123456' });

    await userFactory.save({  username: 'admin', password: '123456',role: 'admin' });
  }
}