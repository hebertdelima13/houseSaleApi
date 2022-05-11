import { generateMessage } from "../helpers/message.helper";
import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

class UsersService {

    async getAll() {
        return UserRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return UserRepository.getById(id);
    }


    create(user: User) {
        return UserRepository.create(user);
    }

    login(user: User) {
        if (!user) throw new Error('Usuário não encontrado!');
        return UserRepository.login(user);
    }

    remove(id: number) {
        return UserRepository.delete(id);
    }

    update(id: number, user: User) {
        return UserRepository.update(id, user);
    }
}

export default new UsersService();