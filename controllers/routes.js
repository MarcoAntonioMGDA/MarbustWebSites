const path = require('path');

const express = require('express');

const router = express.Router();

//Home
router.get('/', (req, res, next) => {
    res.render('template', {
        pageTitle: 'Home',
        PagetoLoad: 'home',
    });
});

//404
router.use((req, res, next) => {
    res.status(404).render('template', {
        pageTitle: 'Page Not Found',
        PagetoLoad: '404',
    });
});

module.exports = router;