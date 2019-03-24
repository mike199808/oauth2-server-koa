const router = require('koa-router')({
    prefix:'/oauth'
})
const controllers = require('../controllers')
router.post('/login', controllers.oauth.login)

router.get('/authorise',controllers.oauth.authorizationCode)

router.post('/token',controllers.oauth.authorization)

module.exports = router