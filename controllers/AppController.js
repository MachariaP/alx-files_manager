/**
 * AppController representing the controller for the application.
 */
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

/**
 * AppController class to handle application status and statistics.
 */
class AppController {
  /**
   * Get the status of Redis and the database.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} JSON response with the status of Redis and the database.
   */
  static async getStatus(req, res) {
    res.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  /**
   * Get the number of users and files in the database.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {object} JSON response with the number of users and files.
   */
  static async getStats(req, res) {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    res.status(200).json({ users, files });
  }
}

export default AppController;
