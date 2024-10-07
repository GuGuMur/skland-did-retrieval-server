const Koa = require('koa');
const Router = require('koa-router');
const { getDeviceId } = require('./utils/getDeviceId');

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = {
    status: true,
    message: 'deployed successfully',
  };
});

router.get('/did', async ctx => {
  try {
    const dId = await getDeviceId();
    ctx.body = {
      status: true,
      dId,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: false,
      message: error,
    };
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Deployed successfully');
});

module.exports = app; // 导出 app 实例，供 Vercel 部署
