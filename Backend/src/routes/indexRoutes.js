import express from "express";
import { upload, convertJfifToJpeg } from "../middlewares/imageupload.js";
import { isAdmin, UserAuth} from "../middlewares/auth.js";
import { createRegister, getRegisterById, updateProfileUser, getAllEmployee, deleteEmployee } from "../controllers/registerController.js";
import { changePassword, forgotPassword, loginUser, logoutUser, resetPassword, VerifyPhone } from "../controllers/loginController.js"

const indexRoutes = express.Router()

// Add isAdminOrManager middleware
const isAdminOrManager = (req, res, next) => {
    if (req.user && (req.user.isAdmin || req.user.role === 'manager')) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied. Admin or Manager privileges required.' });
};

// Regitser Routes
indexRoutes.post("/createRegister", upload.single("image"), convertJfifToJpeg, createRegister)
indexRoutes.get("/getRegisterById/:id", UserAuth, getRegisterById)
indexRoutes.put("/updateProfileUser/:id", UserAuth, upload.single("image"), convertJfifToJpeg, updateProfileUser)
indexRoutes.get("/getAllEmployee", UserAuth, isAdmin, getAllEmployee)
indexRoutes.delete("/deleteEmployee/:id", UserAuth, isAdmin, deleteEmployee)

//login Routes
indexRoutes.post('/loginUser', loginUser);
indexRoutes.post('/forgotPassword', forgotPassword);
indexRoutes.post('/VerifyPhone', VerifyPhone);
indexRoutes.post('/resetPassword', resetPassword);
indexRoutes.post('/changePassword', UserAuth, changePassword);
indexRoutes.post('/logoutUser', UserAuth, logoutUser);

export default indexRoutes