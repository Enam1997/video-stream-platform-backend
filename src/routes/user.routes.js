import { Router } from "express";
import {
  registerUser,
  loginUser,
  loggedOutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUsser,
  updateAccountDetials,
  updateUserAvatar,
  updateUserCover,
  getUserChanelProfile,
  getWatcHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secure route
router.route("/logout").post(verifyJWT, loggedOutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUsser);
router.route("/update-account").patch(verifyJWT, updateAccountDetials);
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("/coverImage"), updateUserCover);

router.route("/c/:userName").get(verifyJWT, getUserChanelProfile);
router.route("/history").get(verifyJWT, getWatcHistory);

export default router;
