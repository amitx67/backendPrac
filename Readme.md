# compiling backend skills

<div align="center">

## 📖 About This Repository

This is **not a finished product**. It is my practice ground for learning how real-world backends are built. I used a YouTube-style app (users, videos, subscriptions) as the theme, so each concept is practised in a realistic context rather than in isolated snippets.

The focus is on **learning the fundamentals properly**: structuring a project, securing an API, handling errors cleanly and working with databases and cloud services.

---

## 🎯 Skills Practised

| Area                     | What I practised                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| **Project architecture** | Modular `routes → controllers → models` structure, separation of concerns                   |
| **REST API design**      | Versioned endpoints (`/api/v1`), proper HTTP methods and status codes                       |
| **Authentication**       | Register, login and logout flow; JWT access and refresh tokens                              |
| **Authorization**        | Protecting routes with custom middleware (`verifyJWT`)                                      |
| **Password security**    | Hashing and verifying passwords with `bcrypt`                                               |
| **Cookies and sessions** | `httpOnly` cookies, `cookie-parser`, Bearer token support                                   |
| **Database design**      | MongoDB schemas, references between collections, Mongoose models                            |
| **Aggregation**          | MongoDB aggregation pipelines for channel profile and watch history, with pagination plugin |
| **File handling**        | Multipart uploads with Multer, then upload to Cloudinary and clean up temp files            |
| **Error handling**       | Reusable `ApiError`, `ApiResponse` and `asyncHandler` utilities                             |
| **Configuration**        | Environment variables with `dotenv`, CORS setup                                             |
| **Tooling**              | Nodemon for development, Prettier for formatting, Postman for API testing                   |

---

## 🛠 Technologies Used

- **Language:** JavaScript (ES Modules)
- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MongoDB with Mongoose v9
- **Auth:** jsonwebtoken, bcrypt, cookie-parser
- **Uploads:** Multer, Cloudinary
- **Utilities:** cors, dotenv, mongoose-aggregate-paginate-v2
- **Dev tools:** Nodemon, Prettier, Postman

---

## 📂 Folder Structure

```
src/
├── controllers/     # Request handling & business logic
├── db/              # Database connection
├── middlewares/     # Auth (JWT) and file upload (Multer)
├── models/          # Mongoose schemas: User, Video, Subscription
├── routes/          # API route definitions
├── utils/           # ApiError, ApiResponse, asyncHandler, Cloudinary helper
├── app.js           # Express app setup
├── constant.js      # App constants
└── index.js         # Entry point
```

---

## ▶️ Running It Locally

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Create a `.env` file in the root first:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚧 Still Practising

- [ ] Wiring up the remaining user routes (change password, update profile, avatar, cover image, watch history)
- [ ] Video upload and management
- [ ] Likes, comments and playlists
- [ ] Subscription endpoints

---

<div align="center">

Built for learning. Every commit is a step forward. 🚀

</div>
