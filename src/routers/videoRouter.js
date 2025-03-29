import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoControllers";

const videosRouter = express.Router();

//':'express에게 변수로 인식하게함
// /upload의 순서도 중요 변수 밑에 오면 express가 upload를 변수로 인식
// .route를 써서 한 경로를 정해 2개이상의 변수를 넣어줄 수 있음

videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videosRouter.route("/upload").get(getUpload).post(postUpload);
videosRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videosRouter;
