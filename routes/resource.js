const router = require('koa-router')({
    prefix: '/resource'
})
const authenticate = require('../middlewares/oauth/authenticate')


router.get('/userInfo', authenticate({
    scope:'get_user_info',
    allowBearerTokensInQueryString: true
}), async function (ctx){
    console.log("userInfo")
    ctx.body = {
        code : "0",
        errMsg : null,
        data : {user:ctx.state.token.user}
    }
})

module.exports = router