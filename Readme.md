# Compiling Backend Skills

<div align="center">

## 📖 About This Repository

This is **not a finished product**. It is my practice ground for learning how real-world backends are built. I used a YouTube-style app (users, videos, subscriptions) as the theme, so each concept is practised in a realistic context rather than in isolated snippets.

The focus is on **learning the fundamentals properly**: structuring a project, securing an API, handling errors cleanly, and working with databases and cloud services.

---

## 🎯 Skills Practised

</div>

| Area | What I Practised |
|---|---|
| **Project Architecture** | Modular `routes → controllers → models` structure and separation of concerns |
| **REST API Design** | Versioned endpoints (`/api/v1`), proper HTTP methods, and status codes |
| **Authentication** | Register, login, and logout flow; JWT access and refresh tokens |
| **Authorization** | Protecting routes with custom middleware (`verifyJWT`) |
| **Password Security** | Hashing and verifying passwords with `bcrypt` |
| **Cookies and Sessions** | `httpOnly` cookies, `cookie-parser`, and Bearer token support |
| **Database Design** | MongoDB schemas, references between collections, and Mongoose models |
| **Aggregation** | MongoDB aggregation pipelines for channel profiles and watch history, with a pagination plugin |
| **File Handling** | Multipart uploads with Multer, uploading to Cloudinary, and cleaning up temporary files |
| **Error Handling** | Reusable `ApiError`, `ApiResponse`, and `asyncHandler` utilities |
| **Configuration** | Environment variables with `dotenv` and CORS setup |
| **Tooling** | Nodemon for development, Prettier for formatting, and Postman for API testing |

<div align="center">

---

## 🛠 Technologies Used

</div>

- **Language:** JavaScript (ES Modules)
- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MongoDB with Mongoose v9
- **Authentication:** `jsonwebtoken`, `bcrypt`, `cookie-parser`
- **File Uploads:** Multer, Cloudinary
- **Utilities:** `cors`, `dotenv`, `mongoose-aggregate-paginate-v2`
- **Development Tools:** Nodemon, Prettier, Postman

<div align="center">

---

## 📂 Folder Structure

</div>

```text
src/
├── controllers/     # Request handling and business logic
├── db/              # Database connection
├── middlewares/     # Authentication (JWT) and file uploads (Multer)
├── models/          # Mongoose schemas: User, Video, Subscription
├── routes/          # API route definitions
├── utils/           # ApiError, ApiResponse, asyncHandler, Cloudinary helper
├── app.js           # Express app setup
├── constant.js      # App constants
└── index.js         # Application entry point
```

<div align="center">

---

## ▶️ Running It Locally

</div>

### 1. Clone the Repository

```bash
git clone https://github.com/amitx67/backendPrac.git
cd backendPrac
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Important:** Replace the placeholder values with your actual credentials. Never commit your `.env` file or expose your secrets publicly.

### 4. Start the Development Server

```bash
npm run dev
```

<div align="center">

---

## 🚧 Still Practising

</div>

- [ ] Implementing the remaining user routes: change password, update profile, avatar, cover image, and watch history
- [ ] Video upload and management
- [ ] Likes, comments, and playlists
- [ ] Subscription endpoints

<div align="center">

---

Built for learning. Every commit is a step forward. 🚀

</div>
