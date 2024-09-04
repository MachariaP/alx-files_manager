/**
 * Defines the routes for the application
 */

import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

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

/**
 * Route to post new user.
 */
router.post('/users', async (req, res) => UsersController.postNew(req, res));
export default router;

/**
 *
 */
router.get('/connect', async (req, res) => AuthController.getConnect(req, res));

/**
 *
 */
router.get('/disconnect', async (req, res) => AuthController.getDisconnect(req, res));

/**
 *
 */
router.get('/users/me', async (req, res) => UsersController.getMe(req, res));
