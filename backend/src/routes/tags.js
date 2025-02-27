const express = require('express');
const router = express.Router();

/* GET tags. */
router.get('/', (req, res) => {
	res.send('Got a request for tags!');
});

module.exports = router;
