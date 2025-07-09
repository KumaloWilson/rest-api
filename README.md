
# 🚀 My First REST API with TypeScript + Express

This is a beginner-friendly project to help you learn how to build a simple REST API using **Express.js** and **TypeScript**.  
We'll create a simple **User API** with full CRUD (Create, Read, Update, Delete) functionality using **in-memory data (no database yet)**.

---

## 📦 Requirements

Before you begin, make sure you have:

- Node.js (v16 or later): [Download here](https://nodejs.org/)
- A terminal or command prompt
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))
- Postman (for testing API): [Download here](https://www.postman.com/downloads/)

---

## 🛠️ Project Setup

### 1️⃣ Create Project Folder and OPen it with VsCode


### 2️⃣ Initialize a Node.js Project

```bash
npm init -y
```

This will create a `package.json` file.

---

## 🧪 Install Required Packages

### 3️⃣ Install Express and Other Dependencies

```bash
npm install express
```

### 4️⃣ Install TypeScript and Dev Tools

```bash
npm install --save-dev typescript ts-node-dev @types/node @types/express
```

---

## ⚙️ TypeScript Configuration

### 5️⃣ Create a TypeScript config file

```bash
npx tsc --init
```

Then in your `tsconfig.json`, make sure the following options are set:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 📁 Project Folder Structure

Create the following folders and files:

```
src/
├── index.ts
├── server.ts
├── model/
│   └── user.model.ts
├── data/
│   └── users.ts
├── services/
│   └── users.service.ts
├── controllers/
│   └── users.controller.ts
├── routes/
│   └── users.route.ts
```

You can now copy your code into the relevant files from your Day 2 notes.

---

## 🧾 Scripts (package.json)

Open your `package.json` and update the `"scripts"` section like this:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

- `dev`: Starts the server in development mode (auto-restarts when you save)
- `build`: Compiles TypeScript to JavaScript in the `dist` folder
- `start`: Runs the compiled JavaScript app (for production)

---

## 🚀 Running the Project

### 🔹 Start Development Server

```bash
npm run dev
```

You should see:

```
Server running on http://localhost:3000
```

### 🔹 Test API with Postman

Try the following:

| Method | URL                        | Description       |
|--------|----------------------------|-------------------|
| GET    | http://localhost:3000/api/users | Get all users     |
| POST   | http://localhost:3000/api/users | Create a new user |

Use this JSON body when creating a new user:

```json
{
  "name": "Charlie",
  "email": "charlie@example.com"
}
```

---

## 🔁 Build and Run for Production

```bash
npm run build     # Compiles TypeScript to JavaScript
npm start         # Runs dist/server.js
```

---

## 🧠 Next Steps

After you're done:

- Add validation to your inputs.
- Add a new resource like `products` or `posts`.
- Learn about middleware and error handling.

---

## 🧰 Helpful Tools

- [Postman](https://www.postman.com/downloads/)
- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)
- [REST API Visual Guide](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*P7jF4vUc5v9wsNA49tgXPA.png)

---

Happy Coding! 💻🔥
