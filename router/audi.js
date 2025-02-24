import express from "express"
import { allCars, audis } from "../data/car-object.js";

const audiCarsRouter = express.Router();


audiCarsRouter.get("/",(req,res) => {
         res.render("pages/home", {
            headTitle: 'Node-Website',
            title: "Audis",
            pageType: "Audi",
            allCars: audis,
        });
    });

// audiCarsRouter.get("/audia4", (req,res) => {
//     res.render("pages/home", {
//            headTitle: "Node-Website",
//            title: "Audis",
//            pageType: "Audi",
//            allCars: audis,
//     });
// });

// audiCarsRouter.get("/audia6", (req,res) => {
//     res.render("pages/home", {
//            headTitle: "Node-Website",
//            title: "Audis",
//            pageType: "Audi",
//            allCars: audis,
//     })
// })

// audiCarsRouter.get("/audiq5", (req,res) => {
//     res.render("pages/home", {
//         headTitle:"Node-website",
//         title: "Audis",
//         pageType: "Audi",
//         allCars: audis,
//     })
// })

audis.forEach((audi) => {
    audiCarsRouter.get(`/${audi.slug}`,(req, res) => {

        console.log(req.path)

        audis.forEach(car => console.log(car.slug))

        let car = audis.filter(car => "/"+car.slug === req.path)

        res.render("pages/home", {
            headTitle:audi.name, 
            title: audi.name,
            pageType: "audi",
            allCars: car[0],  
        });

    
    });
});



export default audiCarsRouter