import mongoose from "mongoose";

// 127. .  . / 여기뒤에 DB의 이름을 꼭 넣기
mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handledError = (error) => console.log("DB error", error);

db.on("error", handledError);
db.once("open", handleOpen);
