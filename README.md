// README.md
# MySQL + Sequelize-TypeScript Backend

A beginner-friendly backend server demonstrating how to use MySQL with Sequelize-TypeScript for user management.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup MySQL Database



**Option B: Local MySQL Installation**
- Download and install MySQL from [official website](https://dev.mysql.com/downloads/installer/)
- Create a database named `bootcamp`

### 3. Configure Environment
Copy `.env.example` to `.env` and update the values:
```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=bootcamp
DB_USER=root
DB_PASSWORD=root
PORT=3000
```

### 4. Start Development Server
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📋 API Endpoints

### Users Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Example Requests

**Create User:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }'
```

**Get All Users:**
```bash
curl http://localhost:3000/api/users
```

**Update User:**
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "age": 26
  }'
```

## 🏗️ Project Structure

```
src/
├── config/
│   └── database.ts          # Database configuration
├── models/
│   └── user.model.ts        # User model with Sequelize decorators
├── services/
│   └── user.service.ts      # Business logic for user operations
├── controllers/
│   └── user.controller.ts   # HTTP request handlers
├── routes/
│   └── user.routes.ts       # Route definitions
└── index.ts                 # Server entry point
```

## 🔧 Key Features

- **TypeScript**: Full type safety
- **Sequelize-TypeScript**: ORM with decorators
- **MySQL**: Persistent database storage
- **Express**: Web framework
- **CORS**: Cross-origin resource sharing
- **Environment Variables**: Configuration management
- **Error Handling**: Comprehensive error responses
- **Validation**: Built-in Sequelize validation

## 📚 Learning Points

1. **Models**: Define database schema using decorators
2. **Services**: Separate business logic from controllers
3. **Controllers**: Handle HTTP requests and responses
4. **Routes**: Organize API endpoints
5. **Database**: MySQL connection and operations
6. **Validation**: Data validation at model level
7. **Error Handling**: Proper error responses

## 🧪 Testing with Postman

Import the following collection or test manually:

1. **Health Check**: `GET http://localhost:3000/health`
2. **Create User**: `POST http://localhost:3000/api/users`
3. **Get Users**: `GET http://localhost:3000/api/users`
4. **Update User**: `PUT http://localhost:3000/api/users/1`
5. **Delete User**: `DELETE http://localhost:3000/api/users/1`

## 🐛 Troubleshooting

### Database Connection Issues
- Ensure MySQL is running
- Check database credentials in `.env`
- Verify database exists

### Port Already in Use
- Change the PORT in `.env`
- Or stop the process using the port

### TypeScript Errors
- Run `npm run build` to check for compilation errors
- Ensure all dependencies are installed

## 🔄 Next Steps

1. Add more models (Posts, Comments)
2. Implement relationships between models
3. Add authentication and authorization
4. Implement pagination
5. Add API documentation with Swagger
6. Add unit tests
7. Implement database migrations