import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/user.router';

const app = express();
dotenv.config({ path: '.env.local' });

app.use(cors());
app.use(express.json());

app.get('/release', (req, res) => {
    const release_version = process.env.RELEASE_VERSION || '1.0.0';
    res.json({ message: 'Welcome to the Dating App API', version: release_version });
});

//routes
app.use('/api', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
