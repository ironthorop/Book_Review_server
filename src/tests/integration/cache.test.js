const request = require("supertest");
const app = require("../../../index.js");
const redisClient = require("../../utils/redis.js");

describe("Integration Test - Redis Cache", () => {
  beforeEach(async () => {
    await redisClient.del("books");
  });

  it("should fetch books and cache them", async () => {
    const res1 = await request(app).get("/books");
    expect(res1.statusCode).toBe(200);

    const cached = await redisClient.get("books");
    expect(cached).not.toBeNull();

    const res2 = await request(app).get("/books");
    expect(res2.statusCode).toBe(200);
  });

  it("should return from DB if Redis is down", async () => {
    const originalGet = redisClient.get;
    redisClient.get = () => Promise.reject(new Error("Redis down"));

    const res = await request(app).get("/books");
    expect(res.statusCode).toBe(200);

    redisClient.get = originalGet;
  });
});
