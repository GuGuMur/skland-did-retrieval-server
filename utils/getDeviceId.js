const { Script } = require('vm');
const { readFileSync } = require('fs');
const path = require('path');

const getDeviceId = () =>
  new Promise(resolve => {
    const window = require(path.resolve(__dirname, './browser-env-fix.js'))();

    window._smReadyFuncs = [
      () => {
        resolve(window.SMSdk.getDeviceId());
      },
    ];
    window._smConf = {
      organization: 'UWXspnCCJN4sfYlNfqps',
      appId: 'default',
      publicKey:
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmxMNr7n8ZeT0tE1R9j/mPixoinPkeM+k4VGIn/s0k7N5rJAfnZ0eMER+QhwFvshzo0LNmeUkpR8uIlU/GEVr8mN28sKmwd2gpygqj0ePnBmOW4v0ZVwbSYK+izkhVFk2V/doLoMbWy6b+UnA8mkjvg0iYWRByfRsK2gdl7llqCwIDAQAB',
      protocol: 'https',
      apiHost: 'fp-it.portal101.cn',
      apiPath: '/deviceprofile/v4',
    };
    const smScript = new Script(
      readFileSync(path.resolve(__dirname, './sm.sdk.js'), 'utf-8')
    );
    return smScript.runInNewContext(window);
  });

module.exports = { getDeviceId };
// export default getDeviceId
