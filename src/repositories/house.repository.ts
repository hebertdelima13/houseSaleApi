
import { getConnection } from 'typeorm';
import { House } from '../entities/house.entity';

export class HouseRepository {

    static getAll() {
        return getConnection()
        .getRepository(House)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(House)
        .findOne(id);
    }

    static create(house: House) {
        return getConnection()
        .getRepository(House)
        .insert(house);
    }

    static delete(id: number) {
        return getConnection()
        .getRepository(House)
        .delete({
            id: id,
        });
    }

    static update(id: number, house: Partial<House>) {
        return getConnection()
        .getRepository(House)
        .update({
            id: id
        }, house);
    }
}
