import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import UsersService from '../services/users.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await UsersService.getAll();
    res.send(users);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await UsersService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await UsersService.create(req.body);
    res.status(201).send(generateMessage("Usuário criado com sucesso!"));
});


router.delete('/:id', async (req: Request, res: Response) => {
    const memberId = parseInt(req.params.id);
    const member = await UsersService.getById(memberId);
    if (!member) return res.status(404).send(generateMessage('Usuário não encontrado! '));

    await UsersService.remove(memberId);
    return res.status(200).send(generateMessage('Usuário removido com sucesso!' ));
});

router.put('/:id', async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = await UsersService.getById(userId);
    if (!user) return res.status(404).send(generateMessage('Usuário não encontrado! '));

    await UsersService.update(userId, req.body);

    res.status(200).send(generateMessage('Usuário atualizado com sucesso!'));
});

router.post('/login', async (req: Request, res: Response) => {
    const user = await UsersService.login({email: req.body.email, password: req.body.password});
    if(!user) {
        return res.status(400).send('Usuário ou senha inválida!')
        
    }

    res.status(200).send({name: user.name, user: user.email})
});


export default router;