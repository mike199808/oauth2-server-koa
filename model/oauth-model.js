function getClient(clientId, clientSecret) {
    console.log("getclient")
    // return new Promise(function(){
        // var clientWithGrants={
        // redirectUris : ["https://www.baidu.com"],
        // grants : ["authorization_code", "refresh_token"],
        // scope : ["*"],
        // banScope : []
        // }
        // return clientWithGrants
    // }).catch(function (err) {
    //     console.log('getClient - Err: ', err)
    // })
    var clientWithGrants={
        redirectUris : ["https://www.baidu.com"],
        grants : ["authorization_code", "refresh_token"],
        scope : ["*"],
        banScope : []
        }
    return clientWithGrants
}

function getAccessToken(bearerToken) {
    console.log("getAccessToken")
    return{
        accessToken:"33ab097e8a149b070008ff557430c72b32e3252b",
        accessTokenExpiresAt:new Date("2019-03-23T12:37:41.495Z"+1),
        client: { id: "stu" },
        scope:"get_user_info",
        user: "17jwmai2"
    }
}

function getAuthorizationCode(code) {
    console.log("getAuthorizationCode")
    return {
        code: code,
        client: {},
        user: { id: "user_id" },
        expiresAt: new Date("2019-03-23T12:37:41.495Z"+1),
        redirectUri: "https://www.baidu.com",
        scope: "get_user_info",
    }
}

function getRefreshToken(refreshToken) {
    console.log("getRefreshToken")
    return {
        user: {},
        client: {},
        refreshTokenExpiresAt: new Date("2019-03-23T12:37:41.495Z"+1),
        refreshToken: "6341a4e46e8cb9285b03b5a3b49eb6cbfa6eb292",
        scope: "get_user_info"
    }
}

function saveAuthorizationCode(code, client, user){
    console.log("saveAuthorizationCode")
    code.code = code.authorizationCode
    console.log(code);
        return {
            authorizationCode: code.authorizationCode,
            expiresAt: code.expiresAt,
            redirectUri: code.redirectUri,
            scope: code.scope,
            client: client,
            user: user
        }
}

function validateScope(user, client, scope) {
    console.log("validateScope")
    // list of valid scopes
    const VALID_SCOPES = client.scope
    const BAN_SCOPES = client.banScope
    return VALID_SCOPES.indexOf('*') > -1 ? scope : scope
        .split(' ')
        .filter(s => VALID_SCOPES.indexOf(s) >= 0 && BAN_SCOPES.indexOf(s) < 0)
        .join(' ')
}

function verifyScope(token, scope) {
    console.log("verifyScope")
    if (!token.scope) {
        return false
    }
    if (token.scope.indexOf('*') >= 0) {
        return true
    }
    let requestedScopes = scope.split(' ')
    let authorizedScopes = token.scope.split(' ')
    return requestedScopes.every(s => authorizedScopes.indexOf(s) >= 0)
}

function revokeAuthorizationCode(code) {
    console.log("revokeAuthorizationCode")
    return "i am revokeAuthorizationCode"
}

function revokeToken(token) {
    console.log("revokeToken")
    return("打酱油")
}


function saveToken(token, client, user){
    console.log("saveToken")
    // return Promise.all([
    //     new Promise(function(){
    //         console.log("find the aceessToken") 
    //          return "33ab097e8a149b070008ff557430c72b32e3252b"
    //     })
    //         .then((accessToken) => {
    //             if(accessToken && user.grant_type !== 'refresh_token'){
    //                 return accessToken
    //             } else {
    //                 console.log("insert the new accesstoken in the databases")
    //             }
    //         }),
    //     new Promise(function(){
    //         token.refreshToken = "6341a4e46e8cb9285b03b5a3b49eb6cbfa6eb292"
    //         return token.refreshToken
    //     })
    // ])
    //     .then(function (resultsArray){
    //         let accessToken = resultsArray
    //     })

    return {
        client:"client",
        user:"user",
        accessToken:"33ab097e8a149b070008ff557430c72b32e3252b",
        accessTokenExpiresAt:new Date("2019-03-23T12:37:41.495Z"+1),
        refreshToken:"6341a4e46e8cb9285b03b5a3b49eb6cbfa6eb292",
        refreshTokenExpiresAt:new Date("2019-03-23T12:37:41.495Z"+1),
        scope:token.scope
    }
}

module.exports = {
    saveToken: saveToken, // saveOAuthAccessToken, renamed to
    saveAuthorizationCode: saveAuthorizationCode, // renamed saveOAuthAuthorizationCode,
    getClient: getClient,
    getAccessToken: getAccessToken,
    getAuthorizationCode: getAuthorizationCode, // getOAuthAuthorizationCode renamed to,
    getRefreshToken: getRefreshToken,
    // // grantTypeAllowed, Removed in oauth2-server 3.0
    revokeAuthorizationCode: revokeAuthorizationCode,
    revokeToken: revokeToken,
    validateScope: validateScope,
    verifyScope: verifyScope
}