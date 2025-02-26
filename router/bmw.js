import express from "express";
import { bmws } from "../data/car-object.js";

const bmwCarsRouter = express.Router();

bmwCarsRouter.get ("/" , (req, res) => {
    console.log("BNW hone")
    res.render("pages/home", {
        headTitle: "Node-Website",
        title: 'bmws',
        pageType:"BMW",
        allCars: bmws,
        showSidebar: true,
        showBackground: "main-bmw"
    });
});

bmws.forEach((bmw) => {
    console.log(bmw.slug)
    bmwCarsRouter.get(`/${bmw.slug}`, (req,res) => {

        console.log(req.path)

        bmws.forEach(car => console.log(car.slug))

        let car = bmws.filter(car => "/"+car.slug === req.path)
        res.render("pages/home", {
            headTitle: bmw.name,
            title: bmw.name,
            pageType: "bmw",
            allCars: car[0],
        });
    });
});

// app.use("/bmws", bmwCarsRouter);

export default bmwCarsRouter
