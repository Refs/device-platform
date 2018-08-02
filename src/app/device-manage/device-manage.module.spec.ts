import { DeviceManageModule } from './device-manage.module';

describe('DeviceManageModule', () => {
  let deviceManageModule: DeviceManageModule;

  beforeEach(() => {
    deviceManageModule = new DeviceManageModule();
  });

  it('should create an instance', () => {
    expect(deviceManageModule).toBeTruthy();
  });
});
