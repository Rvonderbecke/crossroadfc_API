import mongoose from 'mongoose';

const TapesSchema = new mongoose.Schema({
	white: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	yellow: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	orange: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	green: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	lightblue: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	darkblue: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	brown: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	red: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	deputy: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
	black: {
		belt: String,
		tapeName: String,
		complete: Boolean,
		content: String,
		poomsaeVid: String,
	},
});

export default mongoose.model('Tapes', TapesSchema);
