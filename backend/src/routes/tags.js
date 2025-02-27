import express from 'express';
const router = express.Router();

/* GET tags. */
router.get('/', (req, res) => {
	res.send('Got a request for tags!');
});

export default router;
