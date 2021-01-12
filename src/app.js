
import express from "express";
import cors from "cors"
import routes from "./routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv/config");

class App {
  constructor() {
    this.server = express();


    mongoose.connect(`${process.env.DATABASE_URL}`, 
        {   useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        }).then(() => {
            console.log("Successfully connect to MongoDB.");
        })
        .catch(err => {
            console.error("Connection error: ", err);
            process.exit();
        });;


    import("./app/database/index.js");

    this.midleeware();
    this.routes();
  }

  midleeware() {
    this.server.use(bodyParser.json({limit: '50mb', extended: true}));
    this.server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    this.server.use(express.json());
    this.server.use(cors());

  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
