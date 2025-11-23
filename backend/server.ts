import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './database/data-source';

const app = express();
dotenv.config({ path: '.env.local' });

app.use(cors());
app.use(express.json());

app.get('/release', (req, res) => {
    const release_version = process.env.RELEASE_VERSION || '1.0.0';
    res.json({ message: 'Welcome to the Dating App API', version: release_version });
});

const PORT = 3000;

// Initialize DB first, then load routers that depend on repositories
AppDataSource.initialize()
  .then(async () => {
    console.log('Data source has been initialized.');

    // Dynamic import so controller modules that grab repositories load after initialization
    const userRouter = (await import('./routers/user.router')).default;
    app.use('/api', userRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
    process.exit(1);
  });
