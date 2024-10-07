import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1727765811795_5651',
  koa: {
    port: 7001,
  },
  midwayLogger: {
    default: {
      transports: {
        file: {
          dir: '/home/admin/logs',
        },
        error: {
          dir: '/home/admin/logs',
        },
      },
    },
  },
} as MidwayConfig;
