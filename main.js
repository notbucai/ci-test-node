const Koa = require('koa');

const app = new Koa()

app.use((ctx)=>{
  ctx.body = 'hello';
})

app.listen(9981, () => {
  console.log(':9981');
})