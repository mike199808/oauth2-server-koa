const OauthServer = require('oauth2-server')
const Request = OauthServer.Request
const Response = OauthServer.Response

const oauth = new OauthServer({
    model: require('../../model/oauth-model')
})

async function authorizationCodeMiddleware(ctx, next){
    console.log("wolaiguozeli")
    const request = new Request(ctx.request)
    const response = new Response(ctx.response)
    const user_id = "4b5cff28e2e635db9d675ba21403a3dd"

    const options = {
        authenticateHandler:{
            handle:() => ({id: user_id})
        }
    }
    request.query.scope = request.query.scope ? request.query.scope : 'get_user_info'
    await oauth.authorize(request, response, options)
        .then(function(code){
            console.log('here')
            console.log(response.headers.location)
            ctx.redirect(response.headers.location)
        })
        .catch(err => {
            console.log(err.message);
        })
}

module.exports = authorizationCodeMiddleware

// TODO:代码到这里，关于state内容。这里，因为没有设置response的输出中间件，所有直接就这样了
