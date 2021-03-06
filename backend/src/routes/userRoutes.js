import userController from "../controllers/userController";
import express from "express";
import file from "../middlewares/fileHandler";
import inputValidator from "../middlewares/inputValidator";
import { createUserSchema } from "../validators/userValidators";
const router = express.Router();

router.get("/all", userController.getAllUser);
router.get("/get/:userId", userController.getUser);
router.post(
  "/create",
  file.form,
  inputValidator(createUserSchema),
  userController.addUser
);
router.put(
    "/update/userId",
    file.form,
    inputValidator(createUserSchema),
    userController.updateUser
  );
  router.delete("/remove/:userId", userController.removeUser);

export default router;
