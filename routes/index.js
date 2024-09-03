import { Router } from 'express';
import AppController from '../controllers/AppController.js';

const router = Router();

// Define the endpoints
router.get('/status', async (req, res) => AppController.getStatus(req, res));
router.get('/stats', async (req, res) => AppController.getStats(req, res));

export default router;
