/**
 * Created by PVer on 2017/6/12.
 */
const express = require('express');
const router = express.Router();
router.get('/user',function (req,res,next) {
    res.send('main')
});
module.exports = router;