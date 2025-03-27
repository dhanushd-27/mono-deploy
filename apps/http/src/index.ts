import { prisma } from '@repo/db/prisma';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.post('/signup', async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.json({ 
    message: 'User created successfully',
    user,
  });
});

app.listen(3007, () => {
  console.log('Server is running on http://localhost:3007');
});