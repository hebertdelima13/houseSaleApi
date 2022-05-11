import { generateMessage } from "../helpers/message.helper";
import { House } from "../entities/house.entity";
import { HouseRepository } from "../repositories/house.repository";

class HousesService {

    async getAll() {
        return HouseRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return HouseRepository.getById(id);
    }


    create(house: House) {
        return HouseRepository.create(house);
    }

    remove(id: number) {
        return HouseRepository.delete(id);
    }

    update(id: number, house: House) {
        return HouseRepository.update(id, house);
    }
}

export default new HousesService();