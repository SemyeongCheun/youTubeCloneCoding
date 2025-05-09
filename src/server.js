import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videosRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

//////////////////////////////////////////여기 사이에서 코드 작성
//controler(req, res, next) req 요청 res 반응

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videosRouter);
app.use("/user", userRouter);

//////////////////////////////////////////

export default app;
