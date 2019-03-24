async function login(ctx, next) {
    console.log(ctx.request.body);
    params = ctx.request.body;
    if(params.account == '17jwmai2'){
        ctx.body = {
            code : "0",
            errMsg : null,
            data : {"user_id":"4b5cff28e2e635db9d675ba21403a3dd"}
        }
    }else{
        ctx.body = {
            code : "0",
            errMsg : "账号或密码错误",
            data: {}
        }
    }
}
module.exports = login;