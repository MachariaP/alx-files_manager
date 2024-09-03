import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

/**
 * Represents a MongoDB client.
 */
class DBClient {
  /**
   * Creates a new DBClient instance.
   */
  constructor() {
    // Get MongoDB connection details from environment variables or use default values
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}`;

    // Create a new MongoDB client
    this.client = new MongoClient(url, { useUnifiedTopology: true });

    // Connect to the MongoDB server
    this.client.connect()
      .then(() => {
        // Set the database once connected
        this.db = this.client.db(database);
      })
      .catch((err) => {
        // Log any connection errors
        console.error('MongoDB connection error:', err);
      });
  }

  /**
   * Checks if the MongoDB client is connected.
   * @returns {boolean} True if the connection is active, otherwise false.
   */
  isAlive() {
    return this.client.topology && this.client.topology.isConnected();
  }

  /**
   * Retrieves the number of documents in the 'users' collection.
   * @returns {Promise<number>} The number of documents in the 'users' collection.
   */
  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  /**
   * Retrieves the number of documents in the 'files' collection.
   * @returns {Promise<number>} The number of documents in the 'files' collection.
   */
  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

// Create and export an instance of DBClient
const dbClient = new DBClient();
export default dbClient;
