const express = require('express');
const router = express.Router();
const { getCases } = require('../datas/gather')

/* GET home page. */
router.get('/', function(req, res, next) {
    getCases()
        .then(resource => {
            res.json(json);
        });
});

module.exports = router;
