import { initServer } from "./app";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();
async function init() {
  const app = await initServer();
  app.use(cors());
  app.listen(8000, () => console.log(`Server Started at PORT:8000`));
}
init();
