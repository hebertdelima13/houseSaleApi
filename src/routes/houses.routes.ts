import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import HousesService from '../services/houses.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const houses = await HousesService.getAll();
    res.send(houses);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await HousesService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await HousesService.create(req.body);
    res.status(201).send(generateMessage("Imóvel criado com sucesso!"));
});


router.delete('/:id', async (req: Request, res: Response) => {
    const houseId = parseInt(req.params.id);
    const house = await HousesService.getById(houseId);
    if (!house) return res.status(404).send(generateMessage('Imóvel não encontrado! '));

    await HousesService.remove(houseId);
    return res.status(200).send(generateMessage('Imóvel removido com sucesso!' ));
});

router.put('/:id', async (req: Request, res: Response) => {
    const houseId = parseInt(req.params.id);
    const house = await HousesService.getById(houseId);
    if (!house) return res.status(404).send(generateMessage('Imóvel não encontrado! '));

    await HousesService.update(houseId, req.body);

    res.status(200).send(generateMessage('Imóvel atualizado com sucesso!'));
});


export default router;