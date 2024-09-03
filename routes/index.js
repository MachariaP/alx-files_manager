/**
 * Defines the routes for the application
 */

import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router();

/**
 * Route to get the statistics of the application.
 * @name GET /status
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/status', async (req, res) => AppController.getStatus(req, res));

/**
 * Route to get the statistics of the application.
 * @name GET /stats
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/stats', async (req, res) => AppController.getStats(req, res));

export default router;
