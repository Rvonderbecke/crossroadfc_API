import Tapes from '../models/Tapes.js'

const createTapes = async (req, res) => {
	const { name, complete, content, poomsaeVid } = req.body;
	console.log
	try {
		await Tapes.create({ yellow: {belt: 'Yellow Belt', tapeName: name, complete,content, poomsaeVid}})
		res.json({msg: 'Success'})
		
	} catch (error) {
		res.json({msg: ' Failed', Error: error.message})
	}
}


export { createTapes }; 