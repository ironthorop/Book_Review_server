const request = require("supertest");
const app = require("../../../index.js");

describe("Book API - Unit Test", () => {
  it("should fetch all books", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new book", async () => {
    const newBook = { title: "Test Book", author: "Test Author" };
    const res = await request(app).post("/books").send(newBook);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test Book");
  });
});
