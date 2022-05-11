import { createConnection } from 'typeorm';
import { House } from '../entities/house.entity';
import { User } from '../entities/user.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '26082016Hk',
    database: 'house_sale',
    entities: [
        User,
        House
    ],
    logging: true,
    // synchronize: true
});