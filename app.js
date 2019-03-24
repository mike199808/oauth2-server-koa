const Koa = require('Koa')
const app = new Koa();
const bodyParser = require('koa-bodyparser')

app.use(bodyParser());

const oauth_router = require('./routes/oauth.js')
app.use(oauth_router.routes())

const resource_router = require('./routes/resource')
app.use(resource_router.routes())

// app.use(async ctx => {
//     ctx.body = 'hello world';
// })
console.log('程序已经开始')
app.listen(3000);