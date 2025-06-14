import express from 'express'
import { addDoctor,allDoctors,loginAdmin } from '../controllers/admincontroller.js';


import upload from '../middleware/multter.js';
import authAdmin from '../middleware/authAdmin.js';
import { changeAvailablity } from '../controllers/doctorscontrollers.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor);

adminRouter.post('/login',loginAdmin);

adminRouter.post('/all-doctors',authAdmin,allDoctors);

adminRouter.post('/change-availability',authAdmin,changeAvailablity);

export default adminRouter;