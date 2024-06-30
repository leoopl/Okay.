import mongoose, { Schema } from "mongoose";

const ProfessionalsSchema = new Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	profession: { type: String, required: true },
	resume: { type: String, required: true },
	email: { type: String, required: true },
	photo: { type: String, required: true },
	number: { type: String, required: true },
	address: {
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true },
		number: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
		neighborhood: { type: String, required: true },
		street: { type: String, required: true },
		zipcode: { type: String, required: true },
	},
});

const ProfessionalsModel = mongoose.model("Professionals", ProfessionalsSchema);
export default ProfessionalsModel;
