import { PerformanceMonitorModule } from './performance-monitor.module';

describe('PerformanceMonitorModule', () => {
  let performanceMonitorModule: PerformanceMonitorModule;

  beforeEach(() => {
    performanceMonitorModule = new PerformanceMonitorModule();
  });

  it('should create an instance', () => {
    expect(performanceMonitorModule).toBeTruthy();
  });
});
