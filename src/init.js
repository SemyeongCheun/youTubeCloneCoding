import "./db";
import "./models/video";
import app from "./server";

const PROT = 4000;

const handleListenting = () =>
  console.log(`server listenting to http://localhost:${PROT}`);

app.listen(PROT, handleListenting);
