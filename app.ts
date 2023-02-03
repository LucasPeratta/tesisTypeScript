import express from 'express';
import routes from "./src/routes/index"
const app = express();

app.set("port",  3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init(db);
import {db} from "./src/db/index";
import {init} from "./src/config/initDatabase";
init(db)

//routes
app.use("/", routes);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });