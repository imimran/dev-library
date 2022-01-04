import express from 'express'
import cors from 'cors'
import { createConnectionAndInitialize } from './models'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

createConnectionAndInitialize()
.then()
.catch((err) => {
  logger.error(err);
  process.exit(1);
});

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({ error: false, msg: "Hello Imran" });
  });

export default app