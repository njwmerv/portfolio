const express = require('express');
const router = express.Router();

/* GET project page. */
router.get('/', (req, res) => {
	res.send('Got a request for projects!');
});

module.exports = router;
