import express from "express";
import homeController from "../controllers/homeController";


let router = express.Router();

let initWebRoutes = (app) => {
	router.get("/", homeController.getHomePage);
	router.get("/about", homeController.getAboutPage);


	router.get("/leengoc", (req, res) => {
        return res.send("Hello Lee Ngoc in undergroun");
    });

	return app.use("/", router);
}

module.exports = initWebRoutes;