require("dotenv").config();
const redis = require("redis");
class RedisBackend {
  constructor() {
    this.client = null;
  }

  connect() {
    this.client = redis.createClient({
      host: process.env.redisConnectionUrl,
      port: process.env.redisConnectionPort,
      password: process.env.redisPassword,
    });
    this.client.on("connect", () => {
      console.log("Redis client connected");
    });
    this.client.on("error", (error) => {
      console.log("Redis not connected", error);
    });
    return this.client;
  }
}
module.exports = RedisBackend;
