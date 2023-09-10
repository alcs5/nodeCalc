const express = require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    res.render('firstPage');
});

router.get('/:calc' , (req , res) => {
    res.locals.data = parseInt(req.params.calc) * 0.62137119;
    res.locals.para = parseInt(req.params.calc);
    res.render('secondPage');
});

router.use((req , res , next) => {
    res.status(404).render('./errors/404');
});

module.exports = router;