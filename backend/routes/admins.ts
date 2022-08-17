import express from "express";
const adminsRouter = express.Router();

// Load Middlware
import isAuthenticated from "../middleware/auth";

// Load Multer
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Load Controllers
import { getMe, getAdmins, createNewAdmin, updateAdmin, deleteAdmin } from "../controllers/admins";

adminsRouter.get('/me', isAuthenticated, getMe);

adminsRouter.route('/').get(isAuthenticated, getAdmins).post(createNewAdmin);

adminsRouter.route('/:admin_id').all(isAuthenticated).put(upload.single('profile_pic'), updateAdmin).delete(deleteAdmin);

export default adminsRouter;