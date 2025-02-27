import express from 'express';
const router = express.Router();

// @route  GET /projects
// @desc   Get a list of projects
// @access Public
router.get('/', async (req, res) => {
	res.send('Got a request for projects!');
});

export default router;
