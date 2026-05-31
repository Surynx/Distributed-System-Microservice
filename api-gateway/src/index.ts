import express from "express";
import { router } from "./routes/route";
import { CONFIG } from "./conf/conf";

const app = express();

app.use("/",router);

app.listen(CONFIG.PORT,()=>console.log(`Gateway running at ${CONFIG.PORT}...✅`));