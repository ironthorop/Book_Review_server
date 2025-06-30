# Book_Review_server

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MySQL server
- Redis server

### Environment Variables
Create a `.env` file in the root directory with the following variables:

```
PORT=3000
DATABASE_NAME=your_db_name
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_HOST=localhost
DATABASE_PORT=3306
REDIS_URL=redis://localhost:6379
```

### Install Dependencies
```sh
npm install
```

### Database Migration
The Sequelize models will auto-sync with the database on server start. No manual migration step is required.

### Running the Service
```sh
npm start
```
Or for development with auto-reload:
```sh
npm run dev
```

The API will be available at `http://localhost:3000`.
Swagger docs: `http://localhost:3000/api-docs`

### Running Tests
```sh
npm test
```

---

## API Endpoints

The API provides endpoints for managing books and reviews. For full details and to try out the endpoints, visit the [Swagger documentation](http://localhost:3000/api-docs).

Example endpoints:
- `GET /books` — List all books
- `POST /books` — Create a new book
- `GET /books/{id}/reviews` — List reviews for a book
- `POST /books/{id}/reviews` — Add a review to a book

---

## Troubleshooting

- **Database connection errors:** Ensure your MySQL server is running and the credentials in `.env` are correct.
- **Redis connection errors:** Make sure Redis is running and the `REDIS_URL` is correct.
- **Port already in use:** Change the `PORT` in your `.env` file or stop the process using the port.

---

