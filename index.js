import express from "express";
import * as path from "path";
import * as dotenv from "dotenv";
import { allCars } from "./data/car-object.js";
import audiCarsRouter from "./router/audi.js";
import bmwCarsRouter from "./router/bmw.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 7070;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res) => {
    res.render("pages/home", {
        title: "Nodewebsite",
        pageType: "home",
        allCars: allCars
    });
});

app.use("/audi", audiCarsRouter);
app.use("/bmw", bmwCarsRouter);

app.listen(PORT, () => console.log(`${PORT} is working good!`));