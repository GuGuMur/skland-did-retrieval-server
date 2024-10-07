import { Controller, Get } from '@midwayjs/core';
import { getDeviceId } from '../utils/getDeviceId.js';

declare let module: any;
declare let global: any;

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<{
    status: boolean;
    message: string;
  }> {
    return {
      status: true,
      message: 'deployed successfully',
    };
  }

  @Get('/did')
  async dId(): Promise<{
    status: boolean;
    dId: Promise<any>;
  }> {
    return {
      status: true,
      dId: await getDeviceId(),
    };
  }
}
