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