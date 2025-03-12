import express from "express";
import { see, edit, deleteVideo, upload} from "../controllers/videoControllers";

const videosRouter = express.Router();

//':'express에게 변수로 인식하게함
// /upload의 순서도 중요 변수 밑에 오면 express가 upload를 변수로 인식

videosRouter.get("/upload", upload);
videosRouter.get("/:id(\\d+)", see);
videosRouter.get("/:id(\\d+)/edit", edit);
videosRouter.get("/:id(\\d+)/delete", deleteVideo);




export default videosRouter;
