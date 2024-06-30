import express from "express";
import ProfessionalsModel from "../models/Professionals";
const router = express.Router();

router.get("/professionals", async (request, response) => {
	try {
		const professionals = await ProfessionalsModel.find();
		response.json(professionals);
	} catch (error) {
		response.status(500).send(error);
	}
});

export default router;
