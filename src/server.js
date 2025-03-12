import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videosRouter from "./routers/videoRouter";


const app = express();
const PROT = 4000;
const logger = morgan("dev");


//////////////////////////////////////////여기 사이에서 코드 작성
//controler(req, res, next) req 요청 res 반응



app.use("/", globalRouter);
app.use("/videos", videosRouter);
app.use("/user", userRouter);


app.use(logger);


//////////////////////////////////////////

const handleListenting = () => 
  console.log(`server listenting to http://localhost:${PROT}`);

app.listen(PROT, handleListenting);

