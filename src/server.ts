import express, { Request, Response } from 'express';
import cors from 'cors';
import { connection } from './database/config';
import membersRouter from './routes/users.routes';
import housesRouter from './routes/houses.routes';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/members', membersRouter);
app.use('/houses', housesRouter);


app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Primeiro projeto funcionando na rota"
    };
    res.send(messageObject);
});


app.listen(port, async () => {
    await connection;
    console.log('Banco de dados conectado com sucesso!');
    console.log(`Servidor disponível na porta: ${port}`);
});