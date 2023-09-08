const router = require('express').Router();

const Auth = require('./Auth_route');

router.use(
    '/',
    Auth
)

module.exports = router;