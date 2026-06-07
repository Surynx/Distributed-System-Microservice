import express, { urlencoded } from "express"
import { verifyService } from "./middleware/verifyService";
import { profileController } from "./di/container";
import "dotenv/config"


const app = express();

app.use(express.json());

app.get("/",verifyService,profileController.getUserProfile);

app.listen(process.env.PROFILE_PORT,()=>console.log(`Profile service running at ${process.env.PROFILE_PORT}`));