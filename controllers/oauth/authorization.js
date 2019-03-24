const OauthServer = require('oauth2-server')
const Request = OauthServer.Request
const Response = OauthServer.Response

const oauth = new OauthServer({
    model: require('../../model/oauth-model.js')
})

function authorization(ctx, next){
    const request = new Request(ctx.request)
    const response = new Response(ctx.response)

    return oauth.token(request, response)
        .then(function(token){
            console.log(token)
            ctx.body = {
                code : "0",
                errMsg : null,
                data : token
            }
        }).catch(function(err){
            ctx.body = {
                code : "000000",
                errMsg : "authorization 有错误",
                data: err
            }
            console.log(err.message)
        })
}

module.exports = authorization